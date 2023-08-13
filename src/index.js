import express from 'express';
import mongoose from 'mongoose';
import Tweet from './models/tweet.js';
import {connectDB} from "./utils/database-utils.js";
import {ServerConfig} from './config/server-config.js';
import TweetRepository from './repositories/tweet-repository.js';
import tweetRouter from './routes/v1/tweet-routes.js';
import userRouter from './routes/v1/user-routes.js';
import likeRouter from './routes/v1/like-routes.js';
import passport from 'passport';
import { passportAuth } from './middlewares/jwt-middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);
app.use("/tweet", tweetRouter);
app.use("/user", userRouter);
app.use("/like", likeRouter);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    connectDB();
    console.log("Connected to MongoDB");
    
});