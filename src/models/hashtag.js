import { ObjectId } from "mongoose";
import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String
    },
    likes: {
        type: Number
    },
    noOfRetweets: {
        type: Number
    },
    comment: {
        type: String
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;