import userService from '../services/user.service.js';

class UserController {
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const token = await userService.login(username, password);
            res.locals.data = { token };
        } catch (error) {
            res.locals.err = error.message;
            res.locals.statusCode = 500;
            console.log(error);
        }

        return next();
    }
}

export default new UserController();