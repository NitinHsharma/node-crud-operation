import responseHandler from "./responseHandler.js";
import jwtToken from "../libs/jwtToken.js";

class Authentication {
    validateUser(req, res, next) {
        // validate bearer token 
        let token = req.headers['authorization'];
        if (!token) {
            res.locals.err = 'No token found';
            return responseHandler.send(req, res);
        }
        
        if(token.includes('Bearer')) {
            token = token.split(' ')[1];
        }

        try {
            const decoded = jwtToken.verifyToken(token);
            req.user = decoded;
            next();
        } catch (e) {
            res.locals.err = 'Invalid Token';
            return responseHandler.send(req, res);
        }
    }
}

export default new Authentication();