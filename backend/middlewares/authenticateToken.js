import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        console.log("No token provided");
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error("Token verification failed:", err.message);
            return res.sendStatus(403);
        }
        req.user = user;
        console.log("Token verified successfully");
        next();
    });
};

export default authenticateToken;
