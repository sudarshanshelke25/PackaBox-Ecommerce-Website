import slugify from "slugify";
import Sector from "../models/sectorModel.js";

// Create Sector Controller
export const createSectorController = async (req, res) => {
    try {
        const {name} = req.body;

        // Validation for Sector
        if (!name) {
            return res.status(401).send({
                message: `Sector Name is required!`
            });
        }

        // Get Existing Sector
        const existingSector = await Sector.findOne({name});
        // Get Existing Sector
        if (existingSector) {
            return res.status(200).send({
                success: true,
                message: `${existingSector.name}, Sector Already Exists!`,
            });
        }

        // Create New Sector
        const sector = await new Sector({name, slug:slugify(name)}).save();

        res.status(201).send({
            success: true,
            message: `${sector.name}, New Sector Created`,
            sector,
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Create Sector!',
            error,
        });
    }
};

// Get All Sector Controller
export const getAllSectorController = async (req, res) => {

};

// Get One Sector Controller
export const getSectorController = async (req, res) => {

};

// Update Sector Controller
export const updateSectorController = async (req, res) => {

};

// Create Sector Controller
export const deleteSectorController = async (req, res) => {

};