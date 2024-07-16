import slugify from "slugify";
import Category from "../models/categoryModel.js";
import fs from 'fs';

// Create Category Controller
export const createCategoryController = async (req, res) => {
    try {
        const {name, slug, sector}= req.fields;
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
        const existingCategory = await Category.findOne({name, sector});
        // Check Existing Category
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: `${existingCategory.name}, Category Already Exists!`,
                existingCategory,
            });
        }

        // Create New Category
        const category = new Category({...req.fields, slug:slugify(name)});
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

}

// Get One Category Controller
export const getCategoryController = async (req, res) => {

}

// Update Category Controller
export const updateCategoryController = async (req, res) => {

}

// Delete Category Controller
export const deleteCategoryController = async (req, res) => {

}


