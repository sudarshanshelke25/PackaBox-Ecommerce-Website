import User from '../models/userModel.js';
import { compairPassword, hashPassword } from '../helpers/authHelper.js';
import JWT from 'jsonwebtoken';

// SignUp Controller
export const signupController = async(req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;

        // Validation For SignUp
        if (!name){
            return res.send({message:'Name is Required'});
        }
        if (!email){
            return res.send({message:'Email is Required'});
        }
        if (!password){
            return res.send({message:'Password is Required'});
        }
        if (!phone){
            return res.send({message:'Phone is Required'});
        }
        if (!address){
            return res.send({message:'Address is Required'});
        }

        // Get Exesting User
        const existingUser = await User.findOne({email});

        // Check Exesting User
        if (existingUser){
            return res.status(200).send({
                success: true,
                message: 'User already SignUp, Please LogIn',
                existingUser,
            })
        }

        // Incrypt User Password
        const hashedPassword = await hashPassword(password);

        // Create New User
        const user = await new User({
            name: name,
            email:email,
            phone:phone,
            password:hashedPassword,
            address:address
        }).save();

        res.status(201).send({
            success:true,
            message:'User SignUp Successfully',
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in User SignUp, Please Try Again!',
            error,
        });  
    }
}

// LogIn Controller
export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;

        // Validation For LogIn
        if (!email || !password){
            return res.status(401).send({
                success: false,
                message: 'Invalid User Email or Password, Please Try Again!'
            });
        }

        // Get User Info
        const user = await User.findOne({email});

        // Check User Info
        if (!user){
            return res.status(401).send({
                success: false,
                message: 'User not SignUp yet, Please SignUp'
            });
        }

        // Compair User Password 
        const match = await compairPassword(password, user.password);

        // Check User Password
        if (!match){
            return res.status(401).send({
                success: false,
                message: 'Invalid User Password, Please Try Again!'
            });
        }

        // Create Token for User
        const token = await JWT.sign(
            {_id:user._id}, 
            process.env.JWT_SECRET, {expiresIn: '7d'});

        res.status(200).send({
            success: true,
            message: 'User LogIn Successfully',
            user: {
                id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                cart:user.cart,
                orders:user.orders,
                wishlist:user.wishlist,
            },
            token,
        })




    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in User LogIn please Try Again!',
            error,
        });
    }
}

export const testController = (req, res) => {
    console.log('Protected Routes');
    res.send({
        success: true,
        message: 'Protected Routes Based on JWT Token'
    });
}

// Forgot Password Controller
export const forgotPasswordController = async(req, res) => { 

}