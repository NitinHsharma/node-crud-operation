import jsonwebtoken from "jsonwebtoken";
import config from '../config/index.js'

class JWTToken {
    createToken(data) {
        return jsonwebtoken.sign(data, config.JWTSECRET);
    }

    verifyToken(token) {
        return jsonwebtoken.verify(token, config.JWTSECRET);
    }
}

export default new JWTToken();