const express = require("express");
const routerApi = require('./routes');


const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello my server in express");
});

app.get("/new-route", (req, res) => {
  res.send("New route");
});


routerApi(app);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
