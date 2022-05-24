const express = require("express");
const routerApi = require("./routes");
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) =>{
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Hello my server in express");
});

app.get("/new-route", (req, res) => {
  res.send("New route");
});

routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
