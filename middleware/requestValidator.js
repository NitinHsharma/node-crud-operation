import ResponseHandler from './responseHandler.js';

class RequestValidation {
  validate(type, schema) {
    return async (req, res, next) => {
      try {
        const validationConfig = await import(`../requestSchema/${type}.js`);
        await validationConfig[schema].validateAsync(req);
        return next();
      } catch (err) {
        res.locals.err = err.message;
        res.locals.statusCode = 400;
        return ResponseHandler.send(req, res, next);
      }
    };
  }
}

export default new RequestValidation();
