/**
 * @typedef Login
 * @property {string} username.required - username or emailid - eg: admin
 * @property {string} password.required - password to login - eg: admin
 */

/**
 * @typedef Output
 * @property {string} message - Message of API ececution - eg: success/failed due to something
 * @property {object} data - Actual data of API - eg: { token: 'abc' }
 * @property {number} statusCode - HTTP status code - eg: 200/400/500
 */

/**
 * This function comment is parsed by doctrine
 * @route post /user/login
 * @group user - Operations about user
 * @param {Login.model} login.body.required 
 * @returns {Output.model} 200 - Output sample
 * @returns {Error}  default - Unexpected error
 */