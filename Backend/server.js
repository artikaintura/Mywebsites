require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Contact = require("./models/Contact"); // Import Contact model
const sendNotification = require("./testEmail");
const app = express();
const path = require('path')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
  });
}

// Middleware
app.use(cors({
  origin: 'https://mywebsites-three.vercel.app/', // Your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type, Authorization'
})); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URI}`,{ 
  useNewUrlParser: true, useUnifiedTopology: true 
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Contact Form API! This is the Home Page");
});

// POST request to '/contact' endpoint
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a new Contact instance
  const contact = new Contact({ name, email, subject, message });

  try {
    await contact.save(); // Save to MongoDB
    console.log("Contact Form Data Saved:", contact);
    await sendNotification({ name, email, subject, message });
    res.status(200).send({ message: "Message received successfully!" });
  } catch (err) {
    res.status(500).send({ message: "Failed to save message!" });
  }
});

// Start server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});
