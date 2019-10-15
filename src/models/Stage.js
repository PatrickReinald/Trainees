const mongoose = require('mongoose');

const StageSchema = new mongoose.Schema({
    title: String,
    descrip: String,
    course: String
}, {
    timestamps : true
});

module.exports = mongoose.model('Stage', StageSchema);
