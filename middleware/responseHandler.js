class ResponseHandler {
    send(req, res, next) {
      const { err, data, message, statusCode, httpStatusCode, extras } = res.locals;
  
      const result = {
        message: message || 'Success',
        data: data || [],
        ...extras,
      };
    
      if (err) {
        result.message = err;
        const finalCode = statusCode || httpStatusCode || 500;
        result.statusCode = finalCode;
        return res.status(finalCode).json(result);
      }
    
      result.statusCode = statusCode || httpStatusCode || 200;
      return res.status(httpStatusCode || statusCode || 200).json(result);
    
    }
  }
  
  export default new ResponseHandler();
  