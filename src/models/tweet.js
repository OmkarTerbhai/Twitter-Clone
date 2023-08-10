import { ObjectId } from "bson";
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String
    },
    likes: {
        type: Number
    },
    noOfRetweets: {
        type: Number
    },
    comment: {
        type: ObjectId
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;