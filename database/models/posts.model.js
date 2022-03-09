import mongoose from "mongoose";

class PostModel {
    Model;
    #schema;
    constructor() {
        this.Model = this.#generatePostModel();
    }

    #generatePostModel() {
        this.#schema = this.#getPostSchema();
        return mongoose.model('Post', this.#schema);
    }

    #getPostSchema() {
        return new mongoose.Schema({
           content: {
               type: String,
               required: true,
           },
           createdBy: {
               type: String,
               required: true
           },
           createAt: {
               type: Date,
               default: new Date()
           }
        });
    }
}

export const postModel = new PostModel().Model;