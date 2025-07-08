require("dotenv").config(); //use secrete variables in secret files
const {MongoClient, ServerApiVersion} = require("mongodb");
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/"; //get the uri from the .env file

const options = {

    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
}

// if we dont have a client make one, if we already have one just return it
let client;

const connectToMongoDB= async () => { 
    
    if (!client) {
        try {
            client = await MongoClient.connect(uri, options);
            console.log("Connected to MongoDB successfully");
        }
         catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }
    return client;
};

const getConnectedClient = () => client;
module.exports = { connectToMongoDB, getConnectedClient };