const {Sequelize, DataTypes} = require('sequelize');
const UserModel = require('./users');

const sequelize = new Sequelize('lbCzdCury5', 'lbCzdCury5', '8qu3OXTLjw', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
  });

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force:false})
  .then(()=>{
      console.log('Tablas sincronizadas')
  });

module.exports = {
    User
}