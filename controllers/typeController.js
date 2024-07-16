import slugify from "slugify";
import Type from './../models/typeModel.js';
import fs from 'fs';


// Create Type Controller
export const createTypeController = async (req, res) => {
    try {
        // Get Type Data From Request Fields
        const {name, slug, category}= req.fields;
        // Get Type Logo Image From Request Files
        const {logo}= req.files;

        // Validation for Type
        if (!name) {
            return res.status(401).send({
                message: `Type Name is required!`,
            });
        }

        if (!category ) {
            return res.status(401).send({
                message: `Type Category is required!`,
            });
        }

        if (!logo && logo.size >10000) {
            return res.status(401).send({
                message: `Type Logo is required! & Should be less than 10MB!`,
            });
        }

        // Get Existing Type
        const existingType = await Type.findOne({name});
        // Check Existing Type
        if (existingType) {
            return res.status(200).send({
                success: true,
                message: `${existingType.name}, Type Already Exists!`,
                existingType,
            });
        }

        // Create New Type
        const type = await new Type({...req.fields, slug:slugify(name)});
        // Set Logo Path and Data Type
        if (logo) {
            type.logo.data = fs.readFileSync(logo.path);
            type.logo.contentType = logo.type;
        }
        await type.save();

        res.status(201).send({
            success: true,
            message: `${type.name}, New Type Created`,
            type,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Create Type!`,
            error,
        });
    }
}

// Get All Type Controller
export const getAllTypeController = async (req, res) => {
    
}

// Get One Type Controller
export const getTypeController = async (req, res) => {
    
}

// Update Type Controller
export const updateTypeController = async (req, res) => {
    try {
        // Get Type Data From Request Fields
        const {name, slug, category}= req.fields;
        // Get Type Logo Image From Request Files
        const {logo}= req.files;
        // Get Type ID From Request Params
        const {id} = req.params;


        // Validation for Type
        if (!name) {
            return res.status(401).send({
                message: `Type Name is required!`,
            });
        }

        if (!category ) {
            return res.status(401).send({
                message: `Type Category is required!`,
            });
        }

        if (!logo && logo.size >10000) {
            return res.status(401).send({
                message: `Type Logo is required! & Should be less than 10MB!`,
            });
        }
        
        // Find By Id And Update Type
        const type = await Type.findByIdAndUpdate(id, {...req.fields, slug:slugify(name)}, {new:true});
        // Set Logo Path and Data Type
        if (logo) {
            type.logo.data = fs.readFileSync(logo.path);
            type.logo.contentType = logo.type;
        }
        await type.save();

        res.status(201).send({
            success: true,
            message: `${type.name}, Type Updated`,
            type,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Update Type!`,
            error,
        });
    }
}

// Delete Type Controller
export const deleteTypeController = async (req, res) => {
    
}
