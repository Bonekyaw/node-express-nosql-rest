require("dotenv").config();
const express = require("express");
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const limiter = require("./middlewares/rateLimiter");

const adminRoutes = require("./routes/v1/admin");
const authRoutes = require("./routes/v1/auth");

const app = express();

app.use(helmet());

app.use(express.json()); // application/json
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());
app.use(cors());
// app.options("*", cors());

app.use(limiter);

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
