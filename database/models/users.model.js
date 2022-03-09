import mongoose from "mongoose";

class UserModel {
    Model;
    #schema;
    constructor() {
        this.Model = this.#generateUserModel();
    }

    #generateUserModel() {
        this.#schema = this.#getUserSchema();
        this.#createIndex();
        this.#registerHooks();
        return mongoose.model('User', this.#schema);
    }

    #getUserSchema() {
        return new mongoose.Schema({
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'ADMIN',
                enum: ['ADMIN', 'STUDENT']
            }
        });
    }

    #createIndex() {
        this.#schema.index({ username: 1 }, { unique: true });
    }

    #registerHooks() {
        this.#schema.pre('save', async function save(next) {
            if (!this.isModified('password')) return next();
            try {
                const SALT_WORK_FACTOR = 10;
                const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
                this.password = await bcrypt.hash(this.password, salt);
                return next();
            } catch (err) {
                return next(err);
            }
        });
    }

}

export const userModel = new UserModel().Model;