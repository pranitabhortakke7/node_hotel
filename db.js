const mongoose = require('mongoose');
//const mongoURL = Process.env.MONGODB_URL;
const mongoURL ='mongodb+srv://pranitab:Pranita7772@cluster0.fnxejoj.mongodb.net/'


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;
