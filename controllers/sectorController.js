import Sector from "../models/sectorModel.js";
import slugify from "slugify";

// Create Sector Controller
export const createSectorController = async (req, res) => {
    try {
        // Get Name Form Request
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
                existingSector,
            });
        }

        // Create New Sector
        const sector = await new Sector({name, slug:slugify(name)}).save();

        res.status(201).send({
            success: true,
            message: `${sector.name}, New Sector Created`,
            sector,
        });

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
    try {
        // Get All Sectors
        const sector = await Sector.find({});

        res.status(200).send({
            success: true,
            message: 'Get All Sector List',
            sector,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get All Sectors!'
        });
    }
};

// Get One Sector Controller
export const getSectorController = async (req, res) => {
    try {
        // Get Slug From Request Params
        const {slug} = req.params;

        // Get One Sector By Slug
        const sector = await Sector.findOne({slug});

        res.status(200).send({
            success: true,
            message: `Get a ${sector.name} Sector info`,
            sector,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get Single Sector!'
        });
    }
};

// Update Sector Controller
export const updateSectorController = async (req, res) => {
    try {
        // Get Name Form Request Body
        const {name} = req.body;
        // Get ID Form Request Params
        const {id} = req.params;

         // Find Sector By ID and Update
        const sector = await Sector.findByIdAndUpdate(id, {name, slug:slugify(name)},{new:true});

        res.status(200).send({
            success: true,
            message: `${sector.name}, Sector Updated`,
            sector,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Update Sector!',
            error,
        });
    }
};

// Delete Sector Controller
export const deleteSectorController = async (req, res) => {
    try {

        // Get ID Form Request Params
        const {id} = req.params;

         // Find Sector By ID and Delete
        const sector = await Sector.findByIdAndDelete(id);

        res.status(200).send({
            success: true,
            message: `${sector.name}, Sector Deleted`,
            sector,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Delete Sector!',
            error,
        });
    }
};