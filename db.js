const mongoose = require("mongoose");

const option = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
};

// todoSchema (task, description, deadline, isCompleted, priority)
const todoSchema = new mongoose.Schema({
    task:{ type: String, required: true},
    description:{ type: String },
    deadline:{ type: Date},
    isCompleted:{ type: Boolean, required: true}, 
    priority:{ type: Number}
});


mongoose.connect("mongodb://localhost:27017/DB_mm", option)
    .then(() => {
        console.log("DB is connected");
    },
        (err) => {
            console.log(err);
        }
    );

module.exports = mongoose.model("Todo", todoSchema);    