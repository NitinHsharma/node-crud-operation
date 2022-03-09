import Router from 'express';
import userController from '../../controllers/users.controller.js';
import requestValidator from '../../middleware/requestValidator.js'

class UserRoutes {
    router;
    constructor() {
        this.router = Router();
        this.#routes();
    }
    #routes() {
        this.router.post('/login', requestValidator.validate('user.schema', 'login'), userController.login);
    }
}

export default new UserRoutes().router;
