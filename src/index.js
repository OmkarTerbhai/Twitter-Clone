import express from 'express';
import mongoose from 'mongoose';
import Tweet from './models/tweet.js';
import {connectDB} from "./utils/database-utils.js";
import {ServerConfig} from './config/server-config.js';
import TweetRepository from './repositories/tweet-repository.js';

const app = express();


app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    connectDB();
    console.log("Connected to MongoDB");
    
});