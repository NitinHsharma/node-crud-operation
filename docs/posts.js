/**
 * @typedef Output
 * @property {string} message - Message of API ececution - eg: success/failed due to something
 * @property {object} data - Actual data of API - eg: { post }
 * @property {number} statusCode - HTTP status code - eg: 200/400/500
 */

/**
 * This function comment is parsed by doctrine
 * @route get /posts
 * @group post - Operations about posts
 * @param {number} page.query - page number for pagination 
 * @param {number} limit.query - number of record per page for pagination 
 * @returns {Output.model} 200 - Output sample
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**
 * @typedef Post
 * @property {string} content.required - Content of post - eg: something is really good today
 */


/**
 * This function comment is parsed by doctrine
 * @route post /posts
 * @group post - Operations about posts
 * @param {Post.model} post.body.required 
 * @returns {Output.model} 200 - Output sample
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**
 * This function comment is parsed by doctrine
 * @route put /posts
 * @group post - Operations about posts
 * @param {string} id.query.required 
 * @param {Post.model} post.body.required 
 * @returns {Output.model} 200 - Output sample
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**
 * This function comment is parsed by doctrine
 * @route delete /posts
 * @group post - Operations about posts
 * @param {string} id.query.required 
 * @returns {Output.model} 200 - Output sample
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */