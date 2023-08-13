import express from "express";
import { createTweet } from "../../controllers/tweet-controller.js";
import { getTweets } from "../../controllers/tweet-controller.js";
import { getTweet } from "../../controllers/tweet-controller.js";

const tweetRouter = express.Router();

tweetRouter.post('/create', createTweet);
tweetRouter.get('/list', getTweets);
tweetRouter.get('/:tweetId', getTweet);

export default tweetRouter;