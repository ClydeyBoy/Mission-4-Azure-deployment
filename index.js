const carValue = require('./src/CarValue')
const express = require('express');
const server = express();
const cookieParser = require('cookie-parser')
const env = require('dotenv');
const { response } = require('express');
server.use(express.json())
env.config()

const PORT = 4000
server.listen(PORT, () => {
    console.log("listening to port 5000");
});


server.post("/car-value", (request, response) => {
    let car = request.body
    let output = carValue(car);
    response.json(output);
})



