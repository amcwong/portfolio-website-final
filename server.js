// https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object
// This is how middle ware is being routed if problems can depreciate and put below into client's package.json and try

// Start app in dev mode with npm run dev
// For server deployment this would require different start and build information depending on the hosting service

const express = require("express");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
require("dotenv").config();

const app = express();
const router = express.Router();
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

app.use(express.json());

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please Fill All The Fields!" });
  }

  const data = {
    from: `Excited User <mailgun@${process.env.MAILGUN_DOMAIN}>`,
    to: "andrew.wong8@icloud.com",
    subject: `Message from ${name}`,
    html: `
      <h3>Email Details</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `,
  };

  mg.messages.create(process.env.MAILGUN_DOMAIN, data)
    .then((msg) => {
      console.log(msg);
      res.status(200).json({ msg: "Thank You For Contacting Andrew." });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json({ msg: "Failed to send email." });
    });
});

app.use("/", router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// Old Express App
// Load environment variables from .env file
// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const contactRoute = require("./route/contactRoute");

// const app = express();

// // Middleware setup
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use("/", contactRoute);

// // Serve static files in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// // Define the port
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
