const express = require('express');



const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        Message: "Welcome to the Middleware."
    })
})


module.exports = router;