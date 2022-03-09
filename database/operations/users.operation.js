import { userModel } from "../models/users.model.js";

class UserOperation {
    
    async findByUsername(username) {
        return await userModel.findOne({username});
    }
}

export default new UserOperation();