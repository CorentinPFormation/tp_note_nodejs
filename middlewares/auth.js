const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies['token'];

    if(!token) {
        return res.status(404).send('Pas de token');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send('token invalide');
    }
};

module.exports = verifyToken;