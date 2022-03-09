import usersOperation from "../database/operations/users.operation.js";
import jwtToken from "../libs/jwtToken.js";
import bycrpt from 'bcryptjs'

class UserService {
    async login(username, password) {
        const userRecord = await usersOperation.findByUsername(username);
        if (userRecord ) {
            // compare bycrpt password
            const isValid = await bycrpt.compare(password, userRecord.password);
            if (isValid) {
                return jwtToken.createToken({ username, type: 'ADMIN' });
            }
        }
        
        // assuming if record not present assume it is student
        return jwtToken.createToken({ username, type: 'STUDENT' });

    }


}

export default new UserService();