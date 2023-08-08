import express from 'express';
import mongoose from 'mongoose';
import Tweet from './models/tweet.js';
import {connectDB} from "./utils/database-utils.js";
import {ServerConfig} from './config/server-config.js';

const app = express();


app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    connectDB();
    console.log("Connected to MongoDB");

    Tweet.create({
        content: "Let that sink in",
        likes: 25,
        noOfRetweets: 5,
        comment: 'This is my first comment'
    })
});