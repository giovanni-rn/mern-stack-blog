import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            maxlength: 200,
        },
        content: {
            type: String,
            required: true,
            maxlength: 10000,
        },
        categories: {
            type: [String],
            required: true,
        },
        upvotes: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);