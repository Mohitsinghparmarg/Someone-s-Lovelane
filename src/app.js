
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const cors = require("cors")

app.use(cors(
      {
            origin: "http://localhost:5173",
            credentials: true,
      },
));



const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter)

connectDB()
      .then(() => {
            console.log("DataBase connection Established Successfully...");
            app.listen(7777, () => {
                  console.log("server is running on 7777...")
            });
      })
      .catch((err) => {
            console.log("DataBase connection couldn't be Established")
      })
