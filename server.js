// https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object
// This is how middle ware is being routed if problems can depreciate and put below into client's package.json and try

// Start app in dev mode with npm run dev
// For server deployment this would require different start and build information depending on the hosting service

// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Routes
app.use("/", contactRoute);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Define the port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
