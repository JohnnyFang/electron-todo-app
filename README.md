
# Electron Todo

A simple todo app made with Electron. it reads and displays data in the form of a TODO list from a postgresql database (local or in a server).

first create a .env file at the root of your project, this file will contain the info to the database you want to connect
```
DB_HOST=localhost
DB_USER=my_todo_user
DB_PASS=mypassword
DB_TABLE_NAME=mydb_table_name
```

to run:   
`npm install && npm start`

the table in the database must contain two columns:    
* id [integer data type]
* text [character data type]


[thx to codedraken for the boiler plate](https://github.com/CodeDraken)
