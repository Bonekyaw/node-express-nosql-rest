require("dotenv").config();
const express = require("express");
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");

const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json()); // application/json
// app.use(bodyParser.json());

app.use("/api/v1", authRoutes);
app.use("/api/v1", adminRoutes);

// mongoose
// .connect(process.env.MONGO_URI)   // Localhost - "mongodb://127.0.0.1/lucky"
// // .connect(process.env.MONGO_URL)   // Mogodb atlas
// .then((result) => {
//     app.listen(8080); // localhost:8080
//     console.log("Sucessfully connected to mongodb Atlas");
//   })
//   .catch((err) => console.log(err));

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  res.status(status).json({ message: message });
});

module.exports = app;
