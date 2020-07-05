const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const pug = require("pug");

//connection to database
require("./database/db");

const app = express();

//FrontEnd Views
app.set("view engine", "pug");
app.set("views", "views");

//MiddleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Routers
const home = require("./routes/home");
const post = require("./routes/post");
const contact = require("./routes/contact");
const about = require("./routes/about");

app.use("/", home);
app.use("/content", post);
app.use("/api/v1/", contact);
app.use("/api/v1/", about);

//PORT connection
const PORT = process.env.PORT | 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
