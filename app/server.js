const app = require("./app");

// const port = process.env.PORT || 8081;
module.exports = app.listen(8081, () => {
  console.log(`server http://localhost:${8081}/`);
});
