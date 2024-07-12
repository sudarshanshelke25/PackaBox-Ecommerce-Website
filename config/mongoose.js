import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Online Packabox MongoDB Database ${conn.connection.host}`.bgMagenta.white);
        
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white); 
        try {
            const conn = await mongoose.connect(process.env.MONGO_LOCAL);
            console.log(`Connected to Local Packabox MongoDB Database ${conn.connection.host}`.bgMagenta.white);
            
        } catch (error) {
            console.log(`Error in MongoDB ${error}`.bgRed.white);
        }
    }
}

export default connectDB;