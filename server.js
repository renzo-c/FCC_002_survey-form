const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
