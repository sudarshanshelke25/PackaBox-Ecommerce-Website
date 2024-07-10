import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            // unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: [
            {
                type: String,
            },
            // street: {
            //     type: String,
            // },
            // city: {
            //     type: String,
            // },
            // state: {
            //     type: String,
            // },
            // zipCode: {
            //     type: String,
            // },
        ],
        phone: {
            type: String,
        },
        role: {
            type: String,
            enum: ['customer', 'admin'],
            default: 'customer',
        },
        cart: [
            {
                type: String,
            },
            // {
            //     productId: {
            //         type: mongoose.Schema.Types.ObjectId, 
            //         ref: 'Product'
            //     }
            // },
        ],
        orders: [
            {
                type: String,
            },
            // { 
            //     type: mongoose.Schema.Types.ObjectId, 
            //     ref: 'Order' 
            // },
        ],
        wishlist: [
            {
                type: String,
            },
            // { 
            //     type: mongoose.Schema.Types.ObjectId, 
            //     ref: 'Product' 
            // }
        ],
    },
    { timestamps: true }
)


const User = mongoose.model('User', userSchema);

export default User;