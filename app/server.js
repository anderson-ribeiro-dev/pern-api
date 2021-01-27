const app = require("./app");

const port = process.env.PORT || 4001;
module.exports = app.listen(port, () => {
  console.log(`server http://localhost:${port}/`);
});
