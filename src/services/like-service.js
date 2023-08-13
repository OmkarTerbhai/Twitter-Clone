import LikeRepository from "../repositories/like-repository.js";
import TweetRepository from "../repositories/tweet-repository.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, userId) {
        const tweet = await this.tweetRepository.get(modelId);
        console.log(modelId.length);
        console.log(tweet);
        //Increase like count
        const newLikes = tweet.likes + 1;
        await tweet.updateOne({likes: newLikes});
    }
}

export default LikeService;