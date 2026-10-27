// Confirmado — Arthur
// Usa os mesmos parâmetros enviados pelo formulário do David.
// O exemplo do HTML é o fallback de cada campo, inclusive com uma URL incompleta.
(function () {
  const params = new URLSearchParams(window.location.search);
  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const unidades = new Map([
    ["PKZ", "PKZ · Barra da Tijuca"],
    ["One to One", "One to One · Barra da Tijuca"]
  ]);

  function preencherCampo(id, valor) {
    if (valor) document.getElementById(id).textContent = valor;
  }

  const nome = params.get("nome")?.trim();
  const telefone = params.get("telefone")?.trim();
  const estudio = params.get("estudio")?.trim();
  const horario = params.get("horario")?.trim();
  const dia = params.get("dia")?.trim();

  // textContent mostra os dados como texto, sem interpretar HTML vindo da URL.
  preencherCampo("resumo-nome", nome);
  preencherCampo("resumo-telefone", telefone);
  preencherCampo("resumo-estudio", unidades.get(estudio));
  if (horario && /^([01]\d|2[0-3]):[0-5]\d$/.test(horario)) {
    preencherCampo("resumo-horario", horario);
  }

  if (dia && /^\d{4}-\d{2}-\d{2}$/.test(dia)) {
    const [ano, mes, numeroDia] = dia.split("-");
    // Meio-dia local evita a mudança de dia causada pela interpretação em UTC.
    const data = new Date(`${dia}T12:00:00`);
    const dataValida = data.getFullYear() === Number(ano)
      && data.getMonth() + 1 === Number(mes)
      && data.getDate() === Number(numeroDia);

    // Datas impossíveis (como 31/02) também mantêm o exemplo do HTML.
    if (dataValida) {
      const resumoDia = document.getElementById("resumo-dia");
      resumoDia.textContent = `${diasSemana[data.getDay()]}, ${numeroDia}/${mes}/${ano}`;
      resumoDia.setAttribute("datetime", dia);
    }
  }
})();
