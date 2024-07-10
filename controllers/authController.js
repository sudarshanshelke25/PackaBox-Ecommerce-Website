import User from '../models/userModel.js';
import { hashPassword } from '../helpers/authHelper.js';
import JWT from 'jsonwebtoken';

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
                message: 'User already SignUp please LogIn',
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
            message: 'Error in User SignUp please Try Again!',
            error,
        });
        
    }


}