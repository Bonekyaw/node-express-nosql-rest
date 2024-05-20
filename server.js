const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI) // Localhost - "mongodb://127.0.0.1/lucky"
  // .connect(process.env.MONGO_URL)   // Mogodb atlas
  .then((result) => {
    app.listen(8080); // localhost:8080
    console.log("Sucessfully connected to mongodb Atlas");
  })
  .catch((err) => console.log(err));
