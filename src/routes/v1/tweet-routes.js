import express from "express";
import { createTweet } from "../../controllers/tweet-controller.js";
import { getTweets } from "../../controllers/tweet-controller.js";
import { getTweet } from "../../controllers/tweet-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

const tweetRouter = express.Router();

tweetRouter.post('/create', authenticate, createTweet);
tweetRouter.get('/list', getTweets);
tweetRouter.get('/:tweetId', getTweet);

export default tweetRouter;