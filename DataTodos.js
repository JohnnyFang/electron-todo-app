require('dotenv').config()

const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST+'/'+process.env.DB_TABLE_NAME);

sequelize.authenticate().then(() => {
  console.log('database connected');
}).catch((err) => {
  console.log('error connecting: ' + err);
})

const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});

Todo.sync()

class DbStore {

  getTodosList (){
    return Todo.findAll({ raw: true });
  }
}

module.exports = DbStore
