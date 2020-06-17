// POINT OF ENTRY

// Server setup
let express = require('express');
let app = express();
app.use(express.json()); // We will send and recieve JSON so add middleware

// Database setup
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const mongoDB = 'mongodb+srv://cs_user:cs_user_pw@cluster0-mhpvz.gcp.mongodb.net/merndb?retryWrites=true&w=majority';
console.log('Connecting to MongoDB at ', mongoDB);
mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setup mount point
let api = require('./routes/api.js');
app.use('/api', api);

// Start listening for requests
let portNumber = 2112;
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}...`);
});