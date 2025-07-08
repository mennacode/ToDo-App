//endpoints will be resposible for the frontend talking to the backend;

const express = require('express');
const router = express.Router();
const {getConnectedClient } = require("./database"); // Import the MongoDB connection function


const getCollection = () => {
    const client = getConnectedClient();
    if (!client) throw new Error("MongoDB client not connected");
    return client.db("todosdb").collection("todos");
}



// GET /todos
router.get("/todos", async (req, res) => {
    try {
        const collection = getCollection();
        const todos = await collection.find({}).toArray();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message || "Failed to fetch todos" });
    }
        
});


//POST /todos  
router.post("/todos", (req, res) => {
  // Logic to create a new todo
  res.status(201).json({ msg: 'POST REQUEST To /api/todos' });
});


// DELETE /todos/:id
router.delete("/todos/:id", (req, res) => {
    res.status(200).json({msg: "DELETE REQUEST To /api/todos/:id"});
});

//PUT /todos/:id
router.put("/todos/:id", (req, res) => {
    res.status(200).json({msg: "PUT REQUEST To /api/todos/:id"});
});


module.exports = router;





