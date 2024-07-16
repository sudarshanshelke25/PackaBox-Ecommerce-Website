import slugify from "slugify";
import Brand from "../models/brandModel.js"
import fs from 'fs';

// Create Brand Controller
export const createBrandController = async (req, res) => {
    try {
        // Get Brand Data From Request Fields
        const {name, slug, category}= req.fields;
        // Get Brand Logo Image From Request Files
        const {logo}= req.files;

        // Validation for Brand
        if (!name) {
            return res.status(401).send({
                message: `Brand Name is required!`,
            });
        }

        if (!category ) {
            return res.status(401).send({
                message: `Brand Category is required!`,
            });
        }

        if (!logo && logo.size >10000) {
            return res.status(401).send({
                message: `Brand Logo is required! & Should be less than 10MB!`,
            });
        }

        // Get Existing Brand
        const existingBrand = await Brand.findOne({name});
        // Check Existing Brand
        if (existingBrand) {
            return res.status(200).send({
                success: true,
                message: `${existingBrand.name}, Brand Already Exists!`,
                existingBrand,
            });
        }

        // Create New Brand
        const brand = await new Brand({...req.fields, slug:slugify(name)});
        // Set Logo Path and Data Type
        if (logo) {
            brand.logo.data = fs.readFileSync(logo.path);
            brand.logo.contentType = logo.type;
        }
        await brand.save();

        res.status(201).send({
            success: true,
            message: `${brand.name}, New Brand Created`,
            brand,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Create Brand!`,
            error,
        });
    }
}

// Get All Brand Controller
export const getAllBrandController = async (req, res) => {
    
}

// Get One Brand Controller
export const getBrandController = async (req, res) => {
    
}

// Update Brand Controller
export const updateBrandController = async (req, res) => {
    try {
        // Get Brand Data From Request Fields
        const {name, slug, category}= req.fields;
        // Get Brand Logo Image From Request Files
        const {logo}= req.files;
        // Get Brand ID From Request Params
        const {id} = req.params;


        // Validation for Brand
        if (!name) {
            return res.status(401).send({
                message: `Brand Name is required!`,
            });
        }

        if (!category ) {
            return res.status(401).send({
                message: `Brand Category is required!`,
            });
        }

        if (!logo && logo.size >10000) {
            return res.status(401).send({
                message: `Brand Logo is required! & Should be less than 10MB!`,
            });
        }
        
        // Find By Id And Update Brand
        const brand = await Brand.findByIdAndUpdate(id, {...req.fields, slug:slugify(name)}, {new:true});
        // Set Logo Path and Data Type
        if (logo) {
            brand.logo.data = fs.readFileSync(logo.path);
            brand.logo.contentType = logo.type;
        }
        await brand.save();

        res.status(201).send({
            success: true,
            message: `${brand.name}, Brand Updated`,
            brand,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Update Brand!`,
            error,
        });
    }
}

// Delete Brand Controller
export const deleteBrandController = async (req, res) => {
    
}
