import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: String,
            required: true,
        },
        discount: {
            type: Number,
            default: 0,
        },
        color: [
            {
                name: {
                    type: String,
                },
                shade: { 
                    type: String,
                },
                required: true,
            },
        ],
        cover: {
            data: Buffer,
            contentType: String,
        },
        stock: {
            type: Number,
            default: 0,
        },
        features: [
            {
                name: {
                    type: String,
                },
                info: {
                    type: String,
                },
            },
        ],
        sector: {
            type: mongoose.Schema.ObjectId,
            ref: 'Sector',
            required: true,
        },
        category: {
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
            required: true,
        },
        brand: {
            type: mongoose.Schema.ObjectId,
            ref: 'Brand',
            required: true,
        },
        type: {
            type: mongoose.Schema.ObjectId,
            ref: 'Type',
            required: true,
        },
        rate: {
            type: Number,
            default: 0,
        },
        review: {
            type: mongoose.Schema.ObjectId,
            ref: 'Review',
        },
        days: {
            type: Number,
            default: 7,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
