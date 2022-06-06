require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection')
//import and require mysql2
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


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




// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});