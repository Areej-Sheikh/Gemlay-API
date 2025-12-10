require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const connectDB = require("./config/db");
require("./config/passport"); 

const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://gemlay-ui.vercel.app",
      "https://gemlay-8ywts92y4-areej-fatima.vercel.app",
      "https://gemlay-8yn98pq7b-areej-fatima.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log("Server running on port 5000"));
