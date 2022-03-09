import { postModel } from "../models/posts.model.js";

class PostOperation {
    
    async getAll(page, limit) {
        return await postModel.find({}).sort({createdAt: -1}).skip((page - 1) * limit).limit(limit).exec();
    }

    async getTotalCount() {
        return await postModel.estimatedDocumentCount({}).exec();
    }

    async addPost(data) {
        const newPost = new postModel({content: data.content, createdBy: data.username});
        return newPost.save();
    }

    async deletePost(id) {
        return await postModel.deleteOne({_id: id});
    }

    async updatePost(id, data) {
        const userPost = await postModel.findByIdAndUpdate(id, { $set: data}, {new: true})
        return userPost;
    }

}

export default new PostOperation();