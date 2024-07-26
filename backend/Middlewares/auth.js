import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next)=>{
    const token = req.headers['authorizacion'];

    if(!token){
        return res.status(401).json({error: 'Acceso denegado'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            return res.status(403).json({ error: "Token invalido" });
        }
        req.user = user;
        next();
    })
}