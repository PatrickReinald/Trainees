const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const JwtController = require('../controllers/JwtController');

async function regist(req, res){
    const {user, password} = req.body;

    const admin = await Admin.create({
        user,
        password
    });

    admin.password = undefined;

    return res.json({Message : "Sucess", Content : admin});
}

async function auth(req, res){
    
    const { user, password } = req.body;

    const admin = await Admin.findOne({user}).select('+password');

    if(!admin){
        return res.status(400).json({Message : "SeuBurro!"});
    }

    if(!await bcrypt.compare(password, admin.password)){
        return res.status(400).json({Message : "Burrão!"});
    }

    return res.json({Message : "Sucess", Token : JwtController.generateToken(admin.id)});

}

module.exports = {regist, auth};