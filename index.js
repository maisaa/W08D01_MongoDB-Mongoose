const express = require("express");
const db = require("./db");

const app = express();
const port = 3000;

const todoModel = require("./schema");

app.use(express.json());

app.get("/todos", (req, res)=>{res.json("get")});
app.post("/create/todo", (req,res) =>{res.json("post")});
app.put("/update/todo", (req, res)=>{res.json("put")});
app.delete("/delete/todo", (req, res)=>{res.json("delete")});



app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});