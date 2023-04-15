import * as dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
const jsonWebToken = process.env.JSON_WEB_TOKEN

const login = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
      res.status(401).json('token not found');
    }
    try {
      const user = jwt.verify(token, jsonWebToken);
      req.user = user.email;
      console.log('middleware is working');
      next();
    } catch (error) {
      res.status(403).json('invalid token');
    }
  }

export default login;