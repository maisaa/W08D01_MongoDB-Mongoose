const mongoose = require("mongoose");

const option = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
};


mongoose.connect("mongodb://localhost:27017/DB_mm", option)
    .then(() => {
        console.log("DB is connected");
    },
        (err) => {
            console.log(err);
        }
    );