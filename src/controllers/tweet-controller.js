import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async(req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        const response = await tweetService.createTweet(data);

        return res.status(200).json({
            data: response,
            message: "Tweet created"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Tweet not created",
            error: error
        });
    }
}

export const getTweets = async(req, res) => {
    try {
        const response = await tweetService.getTweets();
        return res.status(200).json({
            data: response,
            message: "Tweet found"
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Tweet not found",
            error: error
        });
    }
}

export const getTweet = async(req, res) => {
    try {
        const tweetId = req.params.tweetId;
        const response = await tweetService.getTweet(tweetId);

        return res.status(200).json({
            data: response,
            message: "Tweet found"
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Tweet not found",
            error: error
        });
    }
}