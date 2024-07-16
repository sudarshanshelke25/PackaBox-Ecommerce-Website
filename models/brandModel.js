import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
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
        category: {
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
            required: true,
        },
        logo: {
            data: Buffer,
            conetntType: String,
        },
    },
    {
        timestamps: true,
    }
);

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
