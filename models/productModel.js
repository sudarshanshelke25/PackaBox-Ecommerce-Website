import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        discount: {
            type: String,
            default: '0',
        },
        color: {
            type: String,
            required: true,
        },
        cover: {
            data: Buffer,
            contentType: String,
        },
        stock: {
            type: String,
            default: '0',
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
            type: String,
            default: 0,
        },
        review: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Review',
            },
        ],
        days: {
            type: String,
            default: 7,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
