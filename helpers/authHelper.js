import bcrypt from 'bcrypt';

// Hash Function to Incrypt New Password
export const hashPassword = async (password) => {
    try {
        const saltRounds = 10 ;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

// Compare Function to Decrypt & Compare Password 
export const compairPassword = async (password, hashedPassword) => {
    try {
        const compairedPassword = await bcrypt.compare(password, hashedPassword);
        return compairedPassword;
    } catch (error) {
        console.log(error);
    } 
};