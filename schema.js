const mongoose = require("mongoose");

// todoSchema (task, description, deadline, isCompleted, priority)
const todoSchema = new mongoose.Schema({
    task:{ type: String, required: true},
    description:{ type: String },
    deadline:{ type: Date},
    isCompleted:{ type: Boolean, required: true}, 
    priority:{ type: Number}
});



module.exports = mongoose.model("Todo", todoSchema);    
