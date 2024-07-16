import mongoose from "mongoose";

const typeSchema = new mongoose.Schema(
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

const Type = mongoose.model('Type', typeSchema);

export default Type;