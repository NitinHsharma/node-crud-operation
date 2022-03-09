import PostService from '../services/post.service.js';

class PostController {
    async createPost(req, res, next) {
        try {
            const { content } = req.body;
            const { username } = req.user;
            const post = await PostService.create({content, username});
            res.locals.data = post;
            res.locals.statusCode = 201;
        } catch (err) {
            res.locals.err = err.message;
            res.locals.statusCode = 400;
        }

        return next();
    }

    async getAllPosts(req, res, next) {
        try {
            const { page = 1, limit = 2 } = req.query;
            const posts = await PostService.getAll(page, limit);
            res.locals.data = posts;
            res.locals.statusCode = 200;
        } catch (err) {
            res.locals.err = err.message;
            res.locals.statusCode = 400;
        }

        return next();
    }

    async deletePost(req, res, next) {
        try {
            const { id } = req.query;
            console.log(req.params);
            const post = await PostService.delete(id);
            res.locals.data = post;
            res.locals.statusCode = 200;
        } catch (err) {
            res.locals.err = err.message;
            res.locals.statusCode = 400;
        }

        return next();
    }

    async updatePost(req, res, next) {
        try {
            const { id } = req.query;
            const post = await PostService.update(id, req.body);
            res.locals.data = post;
            res.locals.statusCode = 200;
        } catch (err) {
            res.locals.err = err.message;
            res.locals.statusCode = 400;
        }

        return next();
    }
}

export default new PostController();