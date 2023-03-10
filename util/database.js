const Sequalize = require('sequelize');

const sequelize = new Sequalize('shop-project','root','Asparagus',{dialect : 'mysql' , host:'localhost'});

module.exports = sequelize;