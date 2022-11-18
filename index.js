// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const cors = require("cors");
/* ____________________________ */
app.use(cors());

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });
  

/* ____________________________ */

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});