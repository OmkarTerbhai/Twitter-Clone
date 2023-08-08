import mongoose from "mongoose";
import {ServerConfig} from '../config/server-config.js';
export const connectDB = async () => {
    mongoose.connect(`mongodb+srv://${ServerConfig.DBUSER}:${ServerConfig.DBPASSWORD}@cluster0.weyehmf.mongodb.net/twitterDB`);
}