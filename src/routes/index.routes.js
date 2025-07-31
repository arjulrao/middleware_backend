const express = require('express');



const router = express.Router();    //router

router.use((req, res, next) => {
    console.log("This middleware is between Router and API");
    next();
})



router.get('/', (req, res) => {     //API 
    res.json({
        Message: "Hello Ji..."
    })
})


module.exports = router;