const Stage = require('../models/Stage');

async function index(req, res){
    var stages;

    stages = await Stage.find(req.query).select('_id title course createdAt').sort('-createdAt');

    return res.json(stages);
};
 
async function find(req, res){
    const stage = await Stage.findById(req.params.id);

    return res.json(stage);
}

async function insert(req, res){
    const {title, descrip, course} = req.body;

    const stage = await Stage.create({
        title,
        descrip,
        course
    });

    return res.json({Message : "Sucess", Content : stage});
};

async function update(req, res){
    var stage = await Stage.findById(req.params.id);
    await Stage.updateOne(stage, req.body);

    stage = await Stage.findById(req.params.id);

    return res.json({Message : "Atualizado com sucesso", Content : stage});
};

async function del(req, res){
    const stage = await Stage.findByIdAndDelete(req.params.id);

    return res.json({Message : "Deletado com sucesso.", Content : stage});
};

module.exports = {index, find, insert, update, del};