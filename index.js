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

//get all of the todos
app.get("/todos", (req, res)=>{
    todoModel
    .find({})
    .then((result)=> {
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    });
});

//get all of the completed todos
app.get("/todos/done", (req,res)=>{
    todoModel
    .find({isCompleted:true})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err)
    })
});


app.put("/update/todo/:task", (req, res)=>{
    todoModel
    .findOneAndUpdate({task:req.params.task},req.body,{new : true})// req.body  or {isCompleted: req.body.isCompleted, description: req.body.description} if i want to update only these data
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err)
    })
});


app.delete("/delete/todo", (req, res)=>{res.json("delete")});



app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});