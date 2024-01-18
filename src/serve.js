const cors = require("cors");
const express = require("express");
const connectDB = require("./connection.js");
const dotenv = require("dotenv");

const { userSignupController } = require("./controller/userSignupContoller.js");
const { userLoginController } = require("./controller/userLoginController.js");
const {
  certificationController,
} = require("./controller/certificationController.js");
const {
  userSignupUpdateController,
} = require("./controller/userSignupUpdateController.js");
const {
  downloadPdfController,
} = require("./controller/downloadPdfController.js");

const PORT = 4002;
const app = express();

// connect to DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello world");
});

// authentication

app.post("/signup", userSignupController);
app.post("/signin", userLoginController);
app.post("/certification", certificationController);
app.patch("/signup/update", userSignupUpdateController);

app.get("/download-pdf-1", downloadPdfController);

app.listen(PORT, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
