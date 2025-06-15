const express = require('express')
const app = express();

const db = require('./db');
require('dotenv').config(); 

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const Person = require('./models/Person');
const menuItem = require('./models/menuItems'); // ✅ lowercase name
const Task = require('./models/task'); // 👈 Correct path & lowercase


app.get( '', function (req, res){
    res.send('WELCOME TO MY HOTEL....how can i help you?');
})

const personRoutes = require('./routes/personRoutes');
app.use('/', personRoutes);

const menuItemsRoutes = require('./routes/menuItemsRoutes');
app.use('/', menuItemsRoutes);

const taskRoutes = require('./routes/taskRoutes');
app.use('/', taskRoutes);

const PORT = process.env.POT || 3001;

app.listen(3001, () => {
    console.log('listening on port 3001');
})