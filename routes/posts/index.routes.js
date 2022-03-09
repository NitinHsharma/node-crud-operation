import router from 'express';
import postController from '../../controllers/post.controller.js';
import authorization from '../../middleware/authorization.js';
import requestValidator from '../../middleware/requestValidator.js';

class PostRoutes {
    router;
    constructor() {
        this.router = router();
        this.#routes();
    }
    #routes() {
        this.router.get('/', postController.getAllPosts);
        this.router.post('/', requestValidator.validate('post.schema', 'create'), authorization.validateUser, postController.createPost);
        this.router.delete('/',requestValidator.validate('post.schema', 'remove'), authorization.validateUser, postController.deletePost);
        this.router.put('/',requestValidator.validate('post.schema', 'update'), authorization.validateUser, postController.updatePost);
    }
}

export default new PostRoutes().router;