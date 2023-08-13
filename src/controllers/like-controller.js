import logger from "../config/logger-config.js";
import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const like = async(req, res) => {
    await likeService.toggleLike(req.body.tweetId);

    return res.status(200).json({
        data: {},
        message: "Tweet Liked"
    });
}

