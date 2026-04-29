const form = document.getElementById("form");
const lista = document.getElementById("lista");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  await fetch("/agendar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, data, hora })
  });

  carregarAgendamentos();
});

async function carregarAgendamentos() {
  const res = await fetch("/agendamentos");
  const dados = await res.json();

  lista.innerHTML = "";

  dados.forEach(a => {
    const li = document.createElement("li");
    li.textContent = `${a.nome} - ${a.data} às ${a.hora}`;
    lista.appendChild(li);
  });
}

carregarAgendamentos();
