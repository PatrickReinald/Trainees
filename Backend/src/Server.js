const app = require('express')();
const port = 3333;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect('mongodb+srv://teste:teste@cluster0-40aqt.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.json());

app.use(morgan("dev"))

app.use(require('./Routes'));

app.listen(port);

console.log("Server listening on port " + port);