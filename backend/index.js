const express = require("express");
const cors = require("cors");
const routeRouter = require("/routes")
const app = express();

app.use(cors)
app.use(express.json())

app.listen(3000,()=>{console.log("On AIR!!!")})