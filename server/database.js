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







// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2LOpnLaqDQWjTiTen4-8yCQU1CU6-eJU",
  authDomain: "todoapp-8a14d.firebaseapp.com",
  projectId: "todoapp-8a14d",
  storageBucket: "todoapp-8a14d.firebasestorage.app",
  messagingSenderId: "772815850311",
  appId: "1:772815850311:web:da100db0cc6c0c6fb1da62",
  measurementId: "G-0EPNG889XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);