import postsOperation from "../database/operations/posts.operation.js";
import config from '../config/index.js'

class PostService {
    async create(params) {
        if(this.#checkContentLength(params.content)) {
            throw new Error(`Post should be less than ${config.POST.COUNT} chars`)
        }
        const data = await postsOperation.addPost(params);
        return data;
    }

    async getAll(page, limit) {
        const data = await postsOperation.getAll(page, limit);
        const count = await postsOperation.getTotalCount();
        const totalPages = Math.ceil(count/limit);
        return {count, totalPages, currentPage: page, data};
    }

    async delete(id) {
        const data = await postsOperation.deletePost(id);
        return data;
    }

    async update(id, newData) {
        if(this.#checkContentLength(newData.content)) {
            throw new Error(`Post should be less than ${config.POST.COUNT} chars`)
        }
        const data = await postsOperation.updatePost(id, newData);
        return data;
    }

    #checkContentLength(data) {
        return data.length < config.POST.COUNT ? false : true;
    }
}

export default new PostService();