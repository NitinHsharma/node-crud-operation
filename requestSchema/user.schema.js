import joi from "joi";

export const login = joi.object({
    body: joi.object({
        username: joi.string().required().error(() => new Error("username is mandatory.")),
        password: joi.string().required().error(() => new Error("password is mandatory")),
    }).unknown(false).required()
}).unknown();

