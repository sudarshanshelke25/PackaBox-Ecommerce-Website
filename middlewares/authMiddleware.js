import JWT from 'jsonwebtoken';
import User from '../models/userModel.js';

// Create Protected Routes Based on JWT Token
export const protectedRoute = async(req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization, process.env.JWT_SECRET
        );
        req.user = decode;
        next();

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in ProtectedRoute Middleware!',
            error,
        });
    }
}


// Create Admin Routes Based on User Role
export const adminRoute = async(req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if(user.role !== 'admin'){
            return res.status(401).send({
                success: false,
                message: 'Unauthorized User Access Please LogIn by Admin'
            });
        } else {
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in AdminRoute Middleware!',
            error,
        });
    }
}