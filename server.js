const express = require('express');
//import and require mysql2
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware



//Connect to database
const db = mysql2.createConnection(
    {
        host: 'localhost',
        //MYSQL username,
        user: 'root',
        //MYSQL password
        password: '',
        database: 'business_db'
    },
    console.log('Connected to the business_db database.')
);

