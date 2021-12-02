const express = require("express");

const path = require("path");
const app = express();
const port = process.env.PORT || 5500;
//setting the path
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));
// routing
app.get("/", (req, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
