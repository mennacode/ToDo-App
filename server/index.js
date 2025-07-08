require("dotenv").config(); //use secret variables in secret files
const  express= require("express");
const { connectToMongoDB } = require("./database"); // Import the MongoDB connection function
const app= express();


const router = require("./routes");
app.use("/api", router); // Middleware to parse JSON request bodies

const port= process.env.PORT || 500;

async function startServer() { 

    await connectToMongoDB(); // Ensure the database connection is established before starting the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
startServer();
