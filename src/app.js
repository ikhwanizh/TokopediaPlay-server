const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//TODO: Setup middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO: Setup Routes
const apiRoutes = express.Router();
app.use("/api", apiRoutes);

//TODO: setup customer routes
const routes = require("./routes/routes");
apiRoutes.use("/", routes);

module.exports = app;
