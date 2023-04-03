const express = require('express');   //using express as a server
const port = process.env.PORT || 8000;


const app = express();         //initializing express








app.listen(port,function(err){
    if(err){
        console.log("Error in running express server",err);
        return;
    }
    
    console.log("Server is up and running on port",port);
});