const mongoose = require('mongoose');

const StageSchema = new mongoose.Schema({
    title: String,
    descrip: String,
}, {
    timestamps : true
});

module.exports = mongoose.model('Stage', StageSchema);
