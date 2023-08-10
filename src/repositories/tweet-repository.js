import Tweet from "../models/tweet.js";

class TweetRepository {

    async create(data) {
        try {
                let tweet = await  Tweet.create(data);
                return tweet;
        }
        catch(error) {

        }
    }

    async getAllTweets() {
        try {
                let tweet = await  Tweet.find({});
                return tweet;
        }
        catch(error) {

        }
    }

    async getTweet(id) {
        try {
                let tweet = await  Tweet.findById(id);
                return tweet;
        }
        catch(error) {

        }
    }

    async deleteTweet(data) {
        try {
            let tweet = await  Tweet.deleteOne({
                id: data.id
            });
            return tweet;
    }
    catch(error) {

    }
    }
}

export default TweetRepository;