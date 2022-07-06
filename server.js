"use strict";
require('dotenv').config()
var app = require("./app.js");

// import enviroment variables
const PORT = 3010

app.listen(PORT,(err) => {
    if(err){
        console.log(err)
    }else{
        console.log(`app is started on PORT ${PORT}`)
    }
})
 
const server = require("greenlock-express")
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
 
        // contact for security and critical bug notices
        maintainerEmail: "hisham.khalil1990@gmail.com",
 
        // whether or not to run at cloudscale
        cluster: false
    })
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app);

module.exports = server