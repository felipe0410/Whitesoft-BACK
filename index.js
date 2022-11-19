// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();

const cors = require("cors");

const indexRouter = require("./routes/indexRouter");

/* const validations =require("./middlewares/validations") */
/* ____________________________ */
var allowCrossDomain = function(req, res, next) {     res.header('Access-Control-Allow-Origin', "*");     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');     res.header('Access-Control-Allow-Headers', 'Content-Type');     next(); };  app.use(allowCrossDomain); 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/', indexRouter);
app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});
/* ____________________________ */

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});