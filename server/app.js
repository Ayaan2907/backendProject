const express = require("express");
const morgan = require("morgan");
const app = express();
var cors = require("cors");
const userRouter = require("./routes/userRouter");
// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});
// 3) ROUTES
app.use("/api/v1/users", userRouter);
// app.use(globalErrorHandler);
module.exports = app;
