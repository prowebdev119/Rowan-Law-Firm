const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const publicPath = path.join(__dirname, "../build");

app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", function (req, res) {
  const result = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };

  let mailContent = `<html><div>I would like to meet you</div><div style='display:flex'><div>User Name:</div><div> ${result.name}</div></div><div style='display:flex'><div>User email:</div><div>${result.email}</div></div><div style='display:flex'><div>Message:</div><div>${result.message}</div></div></html>`;

  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fofilovvladislav@gmail.com",
      pass: "singsong0809",
    },
  });

  let mailDetails = {
    from: result.email,
    to: "promising.dev72@gmail.com",
    subject: result.subject,
    html: mailContent,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("No Sent!!!");
    } else {
      console.log("Email sent successfully");
    }
  });
  res.send();
});

app.listen(port, function () {
  console.log(`Server is running at http://Localhost: ${port}`);
});
