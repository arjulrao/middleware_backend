const express = require('express');
const indexRoutes = require("./routes/index.routes");


const app = express();


app.use((req, res, next) => {
    console.log("This middleware is Between App and Routes")
    // res.json({
    //     Message: "Welcome to the Middleware."
    // })
    next()     //We have to call next 
})

app.use('/', indexRoutes);


module.exports = app;