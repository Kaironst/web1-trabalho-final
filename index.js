const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const path = require("path");
const { createServer } = require('node:http');

const db = require("./models/ConnectDatabase");
const port = 3000;


db.testConnection().catch((err) => {
  console.error(
    "Erro conectando no bd"
  );
  process.exit(1);
});

app.use(express.json());

app.use(routes);

app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.static('./public'))
app.use(express.static('./public/painelAdmin'))

app.get("/admin", (request, response) => {
  response
    .status(200)
    .sendFile(path.join(__dirname + "/public/painelAdmin/painelAdmin.html"));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
