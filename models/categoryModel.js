import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
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
        sector: {
            type: mongoose.Schema.ObjectId,
            ref: 'Sector',
            required: true,
        },
        cover: {
            data: Buffer,
            contentType: String,
        }
    },
    {
        timestamps: true,
    }
);