export default {
    port: process.env.PORT || 3000,
    MONGO: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost/node-rest-api',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    JWTSECRET: process.env.JWTSECRET || 'abcdefg',
    POST: {
        COUNT: process.env.POST_COUNT || 255
    }
}