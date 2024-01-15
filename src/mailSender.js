const nodemailer = require("nodemailer");
const fs = require("fs");

// pass: "atugcjnlyysfropa",
// pass4: "yaaz myxy gdew nqnd"

exports.mailSender = (name, fileName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ecomnazar.me@gmail.com",
      pass: "", // your 16 digit code
    },
  });
  const mailOptions = {
    from: "ecomnazar.me@gmail.com",
    to: name,
    subject: "Certificate from Sanly Bilim",
    text: `Hello ${name}`,
    html: `
     <h1>Hello ${name}</h1>
     <p>This is your certificate</p>
    `,
    attachments: [
      {
        path: `./src/processed_images/${fileName}.jpg`,
        filename: `${fileName}.jpg`,
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      try {
        setTimeout(() => {
          fs.unlinkSync(`./src/processed_images/${fileName}.jpg`);
          console.log("File is deleted");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  });
};
