import mongoose from "mongoose";
import config from "../config/index.js";

class Mongo {
    
    async createConnection() {
        await mongoose.connect(config.MONGO.uri, config.MONGO.options);
        mongoose.connection.set("maxTimeMS", 100)
        this.#handleEvents();
    }

    #handleEvents() {
        mongoose.connection.on("connected", function () {
            console.log(`mongo connected`);
        });
        mongoose.connection.on("error", function (err) {
            console.log(`Mongoose connection error ${err}`);
        });
        mongoose.connection.on("disconnected", function () {
            console.log(`Mongoose disconnected`);
        });
    }
    
    async disconnect() {
        await mongoose.disconnect();
    }
    
}

export default Mongo;
