//endpoints will be resposible for the frontend talking to the backend;

const express = require('express');

const router = express.Router();

// GET /todos
router.get("/todos", (req, res) => {
    
    res.status(200).json({msg: "Get REQUEST To /api/todos"});
        
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





