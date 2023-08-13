import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository{
    constructor() {
        super(Hashtag);
    }

    async findByName(data) {
        let hashtags = this.model.find({
            text: data
        });
        return hashtags;
    }

    /**
     * Function to create bulk create many hashtags at once
     */
    async bulkCreate(hashtags) {
        let tags = this.model.insertMany(hashtags);
        return tags;
    }
}

export default HashtagRepository;