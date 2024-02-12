import { Post } from "./model.js";

/**
 * Public GET /post : get all existing posts
 */
export const getAllPosts = (req, res) => {
    Post.find({})
        .sort({ createdAt: -1 })
        .then((posts) => res.status(200).send(posts))
        .catch((err) => res.status(400).send(err));
};

/**
* Public GET /post/:title : get one post by its title
*/
export const getOnePost = (req, res) => {
    Post.find({ title: req.params.title })
        .sort({ createdAt: -1 })
        .then((post) => res.status(200).send(post))
        .catch((err) => res.status(400).send(err));
};

/**
 * Public POST /post : record a new post
 */
export const addOnePost = (req, res) => {
    const { title, content, categories, author } = req.body;
    if (title && content && categories && author) {
        Post.create({ title, content, categories, author })
            .then((post) => res.status(201).send(post))
            .catch((err) => res.status(400).send(err));
    } else {
        res.status(400).send("One field is missing.");
    }
};

/**
* Public DELETE /post/:title : delete one post from its title
*/
export const deleteOnePost = (req, res) => {
    Post.deleteOne({ title: req.params.title })
        .then((post) => res.status(200).send(post))
        .catch((err) => res.status(400).send(err));
};