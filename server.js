const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

// 🔥 Serve os arquivos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// 🔥 Rota principal (IMPORTANTE)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

let agendamentos = [];

app.post("/agendar", (req, res) => {
  const { nome, data, hora } = req.body;
  agendamentos.push({ nome, data, hora });
  res.json({ mensagem: "Agendamento realizado!" });
});

app.get("/agendamentos", (req, res) => {
  res.json(agendamentos);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando 🚀");
});
