const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'library.db',
    'root',
    'myPassword',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3301
    }
)