const jwt = require('jsonwebtoken');

function generateToken(id){
    return jwt.sign({id}, "qualquerMerda", {expiresIn: 7200});
}

function validateToken(req, res, next){
    const strToken = req.headers.authorization;

    if(!strToken){
        return res.status(401).json({Message : "Animal!"});
    }

    const [bearer, token] = strToken.split(" ");

    if(!bearer || !token || !/^Bearer$/i.test(bearer)){
        return res.status(401).json({Message : "Retardado!"});
    }

    try{
        const decoded = jwt.verify(token, "qualquerMerda");
        req.id = decoded.id;
        return next();
    } catch(err) {
        return res.status(401).json({Message : "Mongolóide!"});
    }

}

module.exports = {generateToken, validateToken};