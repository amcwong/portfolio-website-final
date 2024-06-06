const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;

  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "awcodetesting@gmail.com",
      pass: "yghusjygxlraxsls",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "andrew.wong8@icloud.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Email Details<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(400).json({ msg: "Failed to send email." });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ msg: "Thank You For Contacting Andrew." });
  });
});

module.exports = router;
// asdf
