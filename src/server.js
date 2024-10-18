require("dotenv").config();
const bookRouter = require("./db/routes/bookRoutes");
const Book = require("./db/models/bookmodels");
const express = require("express");
const Author = require("./db/models/authormodels");


function syncTables() {
    Book.sync({
        alter : true
})
}
const app = express();
app.get("/health", (req,res) => {
    res.status(200).send("API is healthy")
});
app.use(express.json());
app.use(bookRouter);
app.use(bookRouter);
 
syncTables();
app.listen(5001, ()=> {console.log("The server is listening on port 5001.")})