import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId
    },
    noOfRetweets: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },

    onModel:{
        type: String,
        required: true,
        enum: ["Tweet"]
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    }
})

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;