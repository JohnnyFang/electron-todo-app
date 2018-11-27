'use strict'

const path = require('path')
const { app, ipcMain } = require('electron')

const Window = require('./Window')
const DbStore = require('./DataTodos')

require('electron-reload')(__dirname)

const todosDb = new DbStore()

function main () {
  // todo list window
  let mainWindow = new Window({
    file: path.join('renderer', 'index.html')
  })

  // get todo window
  let getTodoWin


  // create get todo window
  ipcMain.on('get-todo-window', (event) => {
    todosDb.getTodosList().then((listTodos) => {

      mainWindow.send('todos', listTodos)
    })

  })

}

app.on('ready', main)

app.on('window-all-closed', function () {
  app.quit()
})
