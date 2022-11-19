// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();

const cors = require("cors");

const indexRouter = require("./routes/indexRouter");

/* const validations =require("./middlewares/validations") */
/* ____________________________ */

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