import logger from "../config/logger-config.js";
import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async(req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        const response = await userService.signUp(data);

        return res.status(200).json({
            data: response,
            message: "Signed Up Successfully"
        });
    } catch (error) {
        logger.info("In user controller " + error);
        return res.status(500).json({
            data: {},
            message: "Signed Up Failed",
            error: error
        });
    }
}

export const signIn = async(req, res) => {
    try {
        const data = req.body;
        const user = await userService.signIn(data);
        
        return res.status(200).json({
            data: user,
            message: "Logged Up Successfully"
        });
    }
    catch(error) {
        logger.info("In user controller " + error);
        return res.status(500).json({
            data: {},
            message: error.message,
            error: error
        });
    }
}