const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const DBconnect = require("./config/dbConnect");
const employeeRoute = require("./routes/emplyeeRoute");
const userRoute = require("./routes/userRoute");
const { notfound, errorHandler } = require("./middleware/error");

const app = express();

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 🚩 Shutting down...");
  console.log(err.stack);
  process.exit(1);
});

dotenv.config({ path: __dirname + "/config.env" });

port = process.env.PORT || 5002;

DBconnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Api Working");
});

/*************Api's**************/

app.use("/api/auth", userRoute);
app.use("/api/employee", employeeRoute);

app.use(notfound);
app.use(errorHandler);

/*************Api's**************/

/*************SERVER**************/

const server = app.listen(port, console.log(`SERVER IS RUNNING ON ${port}`));

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 🚩 Shutting down...");
  server.close(() => {
    process.exit(1); // 1 - for uncaught exception
  });
});
