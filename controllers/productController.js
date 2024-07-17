import slugify from "slugify";
import Product from "../models/productModel.js";
import fs from 'fs';


// Create Product Controller
export const createProductController = async (req, res) => {
    try {
        // Get Product Data From Request Fields
        const {name, slug, description, price, discout, color, stock, feature, sector, category, brand, type, rate, days}= req.fields;
        // Get Product Image From Request Files
        const {cover}= req.files;

        // Validation for Brand
        if (!name) {
            return res.status(401).send({
                message: `Product Name is required!`,
            });
        }

        if (!description) {
            return res.status(401).send({
                message: `Product Description is required!`,
            });
        }

        if (!price) {
            return res.status(401).send({
                message: `Product Price is required!`,
            });
        }

        if (!color) {
            return res.status(401).send({
                message: `Product Color is required!`,
            });
        }

        if (!sector) {
            return res.status(401).send({
                message: `Product Sector is required!`,
            });
        }

        if (!category) {
            return res.status(401).send({
                message: `Product Category is required!`,
            });
        }

        if (!brand) {
            return res.status(401).send({
                message: `Product Brand is required!`,
            });
        }

        if (!type) {
            return res.status(401).send({
                message: `Product Type is required!`,
            });
        }

        if (!cover && cover.size >10000) {
            return res.status(401).send({
                message: `Product Cover is required! & Should be less than 10MB!`,
            });
        }

        // Create New Product
        const product = await new Product({...req.fields, slug:slugify(name)});
        // Set Cover Path and Data Type For Product
        if (cover) {
            product.cover.data = fs.readFileSync(cover.path);
            product.cover.contentType = cover.type;
        }
        await product.save();

        res.status(201).send({
            success: true,
            message: `${product.name}, New Product Created`,
            product,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Create Product!`,
            error,
        });
    }
}

// Get All Product Controller
export const getAllProductController = async (req, res) => {
    
}


// Get One Product Controller
export const getProductController = async (req, res) => {
    
};


// Update Product Controller
export const updateProductController = async (req, res) => {
    try {
        // Get Product Data From Request Fields
        const {name, slug, description, price, discout, color, stock, feature, sector, category, brand, type, rate, days}= req.fields;
        // Get Product Image From Request Files
        const {cover}= req.files;
        // Get Product ID From Request Params
        const {id} = req.params;

        // Validation for Brand
        if (!name) {
            return res.status(401).send({
                message: `Product Name is required!`,
            });
        }

        if (!description) {
            return res.status(401).send({
                message: `Product Description is required!`,
            });
        }

        if (!price) {
            return res.status(401).send({
                message: `Product Price is required!`,
            });
        }

        if (!color) {
            return res.status(401).send({
                message: `Product Color is required!`,
            });
        }

        if (!sector) {
            return res.status(401).send({
                message: `Product Sector is required!`,
            });
        }

        if (!category) {
            return res.status(401).send({
                message: `Product Category is required!`,
            });
        }

        if (!brand) {
            return res.status(401).send({
                message: `Product Brand is required!`,
            });
        }

        if (!type) {
            return res.status(401).send({
                message: `Product Type is required!`,
            });
        }

        if (!cover && cover.size >10000) {
            return res.status(401).send({
                message: `Product Cover is required! & Should be less than 10MB!`,
            });
        }
    
        // Find By Id And Update Product
        const product = await Product.findByIdAndUpdate(id, {...req.fields, slug:slugify(name)}, {new:true});
        // Set Cover Path and Data Type For Product
        if (cover) {
            product.cover.data = fs.readFileSync(cover.path);
            product.cover.contentType = cover.type;
        }
        await product.save();

        res.status(201).send({
            success: true,
            message: `${product.name}, Product Updated`,
            product,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Update Product!`,
            error,
        });
    }
}

// Delete Product Controller
export const deleteProductController = async (req, res) => {
    
}
