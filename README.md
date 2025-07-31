## Code workflow

1. App.js file  create in Src folder
- require express
- server create

2. Server.js
- Require app.js
- server start (app.listen(3000, ()=> {"Anything}))

3. api.routes.js file create in src -> routes folder
- require express 
- use router to create API
    const router = express.Router();

    router.get('/', (req, res) => {
        res.json({
            Message: "Welcome to the Middleware."
        })
    })

4. App.js 
- Require api.routes.js

- app.use('/', route_name)

module.exports = router;


## Request or Response working 
* Postman ---Request Send---> Server ---> App.js ---> Routes ---> API ---Res Send--> Postman


## Middleware
- Request modify --> Can modify request data 
- Response send --> Can send response

- can be use between app and router or router and api

** Types of Middleware in express
- Application-level Middleware
- Router-level Middleware
- Error-handling Middleware
- Built-in Middleware
- Third-party Middleware

Middleware --> 
app.use((req, res, next) => {
    console.log("Between App and Routes")
    next()     //We have to call next 
})