require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
  tls:{
    rejectUnauthorized:false,
  }
});


async function sendNotification(contactDetails) {
const { name, email, subject, message } = contactDetails;

const mailOptions = {
    from: `"Test Email" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Hey, someone contact with you",
    text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}


module.exports = sendNotification;