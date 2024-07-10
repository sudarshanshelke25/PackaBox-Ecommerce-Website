import JWT from 'jsonwebtoken';


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


