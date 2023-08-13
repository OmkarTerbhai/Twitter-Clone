import Comment from "../models/like";
import CrudRepository from "./crud-repository";

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
}

export default CommentRepository;