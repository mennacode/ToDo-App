const  express= require('express');
const app= express();


const router = require('./routes');
app.use("/api", router); // Middleware to parse JSON request bodies

const port= 500;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});