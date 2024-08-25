require("dotenv").config(); //configure .env


const express = require("express"); //to import

const movieRoutes=require("./routes/Movies/movies")
const db=require("./db/index")

const app = new express();// to initalize a object

const port =process.env.PORT || 8080;
db();

app.use(express.json()); //miidleware --> string to json
app.use("/movies",movieRoutes);

app.listen(port,()=>{
    console.log(`Express app listening at http://localhost:${port}`)
})
