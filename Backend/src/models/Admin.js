const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    user : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true,
        select: false
    },
}, {
    timestamps : true
});

AdminSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

module.exports = mongoose.model('Admin', AdminSchema);

