const mongoose = require("mongoose");

// || mongodb://localhost/myBlog1
mongoose.connect(
  "mongodb+srv://ThomasDb:PxxZUE6xjYL2Pgmj@blogcluster.m2ovp.mongodb.net/ThomasDb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // createIndexes: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`Connection to db sucessful`);
});

module.exports = db;
