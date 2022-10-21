// https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object
// This is how middle ware is being routed if problems can depreciate and put below into client's package.json
// https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 8000;
app.listen(port, console.log(`server listing to port 8000`));