const express = require("express");
const db = require("./db");

const app = express();
const port = 3000;

const todoModel = require("./schema");

app.use(express.json());



app.post("/create/todo", (req,res) =>{
    const {task, description, deadline, isCompleted, priority} = req.body;

    const todo = new todoModel({task, description, deadline, isCompleted, priority});

    todo.save()
        .then( result => { res.json(result)})
        .catch(err=>{ res.send(err)})

});



app.get("/todos", (req, res)=>{res.json("get")});

app.put("/update/todo", (req, res)=>{res.json("put")});


app.delete("/delete/todo", (req, res)=>{res.json("delete")});



app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});