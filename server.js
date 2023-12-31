require("dotenv").config({
  path: `.env.${process.env.NODE_ENV === "development" ? "dev" : "prod"}`,
});
const app = require("./app");

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
