const express = require("express");
const app = express();

const port = 3000;

app.use(express.static(__dirname));

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
