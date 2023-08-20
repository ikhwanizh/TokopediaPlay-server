const app = require("./src/app");
const http = require("http");
const { connect } = require("./config/db.config");
require("dotenv").config();

console.log("PORT    ", process.env.PORT);
console.log("MONGO_CONNECTION_STRING    ", process.env.MONGO_CONNECTION_STRING);
if (process.env.ENVIRONMENT !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT;

connect();

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
