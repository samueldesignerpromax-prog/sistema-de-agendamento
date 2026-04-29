const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

let agendamentos = [];

app.post("/agendar", (req, res) => {
  const { nome, data, hora } = req.body;
  agendamentos.push({ nome, data, hora });
  res.json({ mensagem: "Agendamento realizado!" });
});

app.get("/agendamentos", (req, res) => {
  res.json(agendamentos);
});

app.listen(3000, () => {
  console.log("Servidor rodando 🚀");
});
