const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const path = require("path");
const { createServer } = require('node:http');

const db = require("./models/ConnectDatabase");

const hostname = '127.0.0.1';
const port = 3000;
db.testConnection().catch((err) => {
  console.error(
    "Não foi possível conectar ao banco de dados. Encerrando o aplicativo."
  );
  process.exit(1);
});

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});