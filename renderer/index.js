'use strict'

const { ipcRenderer } = require('electron')


//create get todo window button
document.getElementById('getTodoBtn').addEventListener('click', () => {
  ipcRenderer.send('get-todo-window')
})

// on receive todos
ipcRenderer.on('todos', (event, todos) => {
  // get the todoList ul
  const todoList = document.getElementById('todoList')

  // create html string
  const todoItems = todos.reduce((html, todo) => {
    html += `<li class="todo-item">${todo.text}</li>`

    return html
  }, '')

  // set list html to the todo items
  todoList.innerHTML = todoItems

})
