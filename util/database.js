const Sequalize = require('sequelize');

const sequelize = new Sequalize('node-complete','root','Asparagus',{dialect : 'mysql' , host:'localhost'});

module.exports = sequelize;