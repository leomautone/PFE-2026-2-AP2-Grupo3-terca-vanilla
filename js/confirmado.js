// Confirmado — Arthur
// lê os dados do agendamento que vêm na URL e mostra o resumo

const params = new URLSearchParams(window.location.search);

// se a página abrir sem nada na URL, fica o exemplo que já está no HTML
if (params.has("nome")) {
  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const unidades = { "PKZ": "PKZ · Barra da Tijuca", "One to One": "One to One · Barra da Tijuca" };

  const dia = params.get("dia");
  if (dia) {
    const data = new Date(dia + "T12:00");
    const [ano, mes, numeroDia] = dia.split("-");
    document.getElementById("resumo-dia").textContent = `${diasSemana[data.getDay()]}, ${numeroDia}/${mes}/${ano}`;
  }

  const estudio = params.get("estudio");
  document.getElementById("resumo-nome").textContent = params.get("nome");
  document.getElementById("resumo-telefone").textContent = params.get("telefone") || "";
  document.getElementById("resumo-horario").textContent = params.get("horario") || "";
  document.getElementById("resumo-estudio").textContent = unidades[estudio] || estudio || "";
}
