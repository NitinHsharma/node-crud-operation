import joi from "joi";

export const create = joi.object({
    body: joi.object({
        content: joi.string().required().error(() => new Error("post content is mandatory")),
    }).unknown(false).required()
}).unknown();


export const update = joi.object({
    query: joi.object({
        id: joi.string().required().error(() => new Error("id is mandatory"))
    }).unknown(false).required(),
    body: joi.object({
        content: joi.string().required().error(() => new Error("post content is mandatory")),
    }).unknown(false).required()
}).unknown();


export const remove = joi.object({
    query: joi.object({
        id: joi.string().required().error(() => new Error("id is mandatory"))
    }).unknown(false).required(),
}).unknown();


