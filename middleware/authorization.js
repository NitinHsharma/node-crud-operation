import responseHandler from './responseHandler.js';
class Authorization {
    validateUser(req, res, next) {
        if(req.user && req.user.type && req.user.type === 'ADMIN') {
            return next();
        }
        res.locals.err = 'Unauthorized User operation'
        return responseHandler.send(req, res);

    }
}

export default new Authorization();