import mongoose from "mongoose";
import Tweet from "./tweet";

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;