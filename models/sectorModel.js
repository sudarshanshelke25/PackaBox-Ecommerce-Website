import mongoose from "mongoose";

const sectorSchema = new mongoose.Schema(
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
    }
);

const Sector = mongoose.model('Sector', sectorSchema);