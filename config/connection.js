const mongoose = require('mongoose');

// Connect to the Mongo DB
mongoose.connect('mongodb://127.0.0.1:27017/CHITCHAT',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// handle connnection events
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('MongoDB connected');
});

module.exports = db;