import Router from 'express';
import userRoutes from './users/index.routes.js';
import postRoutes from './posts/index.routes.js';
import responseHandler from '../middleware/responseHandler.js';
import authentication from '../middleware/authentication.js';

class IndexRoutes {
    router;
    constructor() {
        this.router = Router();
        this.#routes();
        this.#handleResponse();
        
    }
    #routes() {
        this.router.use('/user', userRoutes);
        this.router.use('/posts', authentication.validateUser, postRoutes);
    }

    #handleResponse() {
        this.router.use(responseHandler.send);
    }
}

export default new IndexRoutes().router;