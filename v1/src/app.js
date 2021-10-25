const express = require("express");
const helmet = require("helmet");
const config = require("../src/config/index");
const loaders = require("../src/loaders/index");

const { ProjectRoutes } = require("./routes/index");

config();
loaders();

const app = express();

app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
  console.log("Server is up");

  app.use("/projects", ProjectRoutes.router);
});
