const app = require("./app");

const port = process.env.PORT || 8081;
module.exports = app.listen(port, () => {
  console.log(`server http://localhost:${port}/`);
});
