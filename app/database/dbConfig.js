require("dotenv").config();
const env = process.env.environment || "development";

const config = require("./knexfile")[env];
module.exports = require("knex")(config);
