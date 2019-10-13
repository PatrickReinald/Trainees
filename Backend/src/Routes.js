const routes = require('express').Router();
const stageController = require('./controllers/StageController');
const adminController = require('./controllers/AdminController');
const jwtController =  require('./controllers/JwtController');

// routes.get('/test', validateToken, (req,res) => {
//     return res.json({ id: req.id});
// })

routes.get('/', stageController.index);

routes.get('/:id', stageController.find);

routes.post('/regist', jwtController.validateToken, stageController.insert);

routes.put('/update/:id', jwtController.validateToken, stageController.update);

routes.delete('/delete/:id', jwtController.validateToken, stageController.del);

routes.post('/admin', adminController.auth);


module.exports = routes;