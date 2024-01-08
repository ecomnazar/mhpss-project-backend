const express = require("express");
const connectDB = require("./connection.js");
const cors = require("cors");
const { userSignupController } = require("./controller/userSignupContoller.js");
const { userLoginController } = require("./controller/userLoginController.js");
const { addText } = require("./sharp.js");
const {
  certificationController,
} = require("./controller/certificationController.js");

const PORT = 4002;
const app = express();

// connect to DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// authentication

app.post("/signup", userSignupController);
app.post("/signin", userLoginController);
app.post("/certification", certificationController);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
