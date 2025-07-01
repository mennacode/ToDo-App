const  express= require('express');
const app= express()


app.get("/hello", (req, res) => {
    res.status(200).json({
        message: 'Hello, World!'})
});

const port= 500;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});