const express = require("express");
const cors = require("cors");
 const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/flixxit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

 app.use("/api/user", userRoutes);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });