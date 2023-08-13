import { ObjectId } from "bson";
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    noOfRetweets: {
        type: Number
    },
    comment: {
        type: ObjectId
    },
    user:{
        type: mongoose.Schema.Types.ObjectId
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;