import slugify from "slugify";
import Category from "../models/categoryModel.js";
import fs from 'fs';

// Create Category Controller
export const createCategoryController = async (req, res) => {
    try {
        // Get Category Data From Request Fields
        const {name, slug, sector}= req.fields;
        // Get Category Cover Image From Request Files
        const {cover}= req.files;

        // Validation for Category
        if (!name) {
            return res.status(401).send({
                message: `Category Name is required!`
            });
        }

        if (!sector ) {
            return res.status(401).send({
                message: `Category Sector is required!`
            });
        }

        if (!cover && cover.size >10000) {
            return res.status(401).send({
                message: `Category Cover is required! & Should be less than 10MB!`
            });
        }

        // Get Existing Category
        const existingCategory = await Category.findOne({name});
        // Check Existing Category
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: `${existingCategory.name}, Category Already Exists!`,
                existingCategory,
            });
        }

        // Create New Category
        const category = await new Category({...req.fields, slug:slugify(name)});
        // Set Cover Path and Data Type
        if (cover) {
            category.cover.data = fs.readFileSync(cover.path);
            category.cover.contentType = cover.type;
        }
        await category.save();

        res.status(201).send({
            success: true,
            message: `${category.name}, New Category Created`,
            category,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Create Category!`,
            error,
        })
    }
}

// Get All Category Controller
export const getAllCategoryController = async (req, res) => {
    try {
        // Get All Categories
        const category = await Category.find({}).sort({ createdAt: 1});

        res.status(200).send({
            success: true,
            message: 'Get All Categories List',
            category,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get All Categories!',
            error,
        });
    }
}

// Get One Category Controller
export const getCategoryController = async (req, res) => {
    try {
        // Get Slug From Request Params
        const {slug} = req.params;

        // Get Single Categories
        const category = await Category.findOne({slug});

        res.status(200).send({
            success: true,
            message: `Get a ${category.name} Category info`,
            category,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Get Single Categories!`,
            error,
        });
    }
}

// Update Category Controller
export const updateCategoryController = async (req, res) => {
    try {
        // Get Category Data From Request Fields
        const {name, slug, sector}= req.fields;
        // Get Category Cover Image From Request Files
        const {cover}= req.files;
        // Get Category ID From Request Params
        const {id} = req.params;

        // Validation for Category
        if (!name) {
            return res.status(401).send({
                message: `Category Name is required!`
            });
        }

        if (!sector ) {
            return res.status(401).send({
                message: `Category Sector is required!`
            });
        }

        if (!cover && cover.size >10000) {
            return res.status(401).send({
                message: `Category Cover is required! & Should be less than 10MB!`
            });
        }

        // Find By Id And Update Category
        const category = await Category.findByIdAndUpdate(id, {...req.fields, slug:slugify(name)}, {new:true});
        // Set Cover Path and Data Type
        if (cover) {
            category.cover.data = fs.readFileSync(cover.path);
            category.cover.contentType = cover.type;
        }
        category.save();

        res.status(204).send({
            success: true,
            message: `${category.name}, Category Updated`,
            category,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Update Category!`,
            error,
        });
    }
}

// Delete Category Controller
export const deleteCategoryController = async (req, res) => {
    try {
        // Get Category ID From Request Params
        const {id} = req.params;

        // Find By Id And Update Category
        const category = await Category.findByIdAndDelete(id);

        res.status(200).send({
            success: true,
            message: `${category.name}, Category Deleted`,
            category,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Delete Category!`,
            error,
        });
    }
}


