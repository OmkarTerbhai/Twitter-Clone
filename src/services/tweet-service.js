import TweetRepository from "../repositories/tweet-repository.js";
import HashtagRepository from "../repositories/hashtag-repository.js";
import logger from "../config/logger-config.js";

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async storeHashtags(tags, tweet) {
        logger.info("Tweet obtained: " + tweet);
        tags.map((tag) => tag.substring(1).toLowerCase());
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let textOfPresentTags = alreadyPresentTags.map(tag => tag.text);
        let newTags = tags.filter(tag => !textOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
                return {
                    text: tag,
                    tweets: [tweet._id]
                }
            }
            );

        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach(element => {
            logger.info("In for each, already present : " + element);
             element.tweets.push(tweet._id);
             element.save();
        });
    }

    async createTweet(data) {
        const content = data.content;
        console.log("data: ", content)
        //Extract Hashtags posted inside  atweet

        const tags = content.match(/#+[a-zA-Z0-9(_)]+/g);
                            
        //Store tweet and hashtag(s)
        const tweet = await this.tweetRepository.create(data);

        if(tags) {
            await this.storeHashtags(tags, tweet);
        }
        
        return tweet;
                            
    }

    async getTweet(id) {
        let tweet = await this.tweetRepository.get(id);
        logger.info("Tweet GET service: " + tweet);
        return tweet;
    }

    async getTweets() {
        let tweets = this.tweetRepository.getAll();
        return tweets;
    }


}

export default TweetService;
