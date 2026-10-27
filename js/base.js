// Base — Leonardo
// Revisão de acessibilidade: estado, nome acessível e Escape no menu móvel.

const menuBotao = document.querySelector(".menu-botao");
const header = document.querySelector(".header");
const menu = header.querySelector(".menu");

// Associa o botão ao menu sem duplicar a alteração nos cinco cabeçalhos.
menu.id = menu.id || "menu-principal";
menuBotao.setAttribute("aria-controls", menu.id);

function definirMenuAberto(aberto) {
  header.classList.toggle("menu-aberto", aberto);
  menuBotao.setAttribute("aria-expanded", String(aberto));
  menuBotao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
}

menuBotao.addEventListener("click", function () {
  definirMenuAberto(!header.classList.contains("menu-aberto"));
});

// fecha o menu ao clicar em um link (ex.: Contato)
document.querySelectorAll(".menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    definirMenuAberto(false);
  });
});

// Escape fecha o menu e devolve o foco ao controle que o abriu.
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && header.classList.contains("menu-aberto")) {
    definirMenuAberto(false);
    menuBotao.focus();
  }
});

// Evita reabrir um estado antigo ao sair do desktop e voltar ao celular.
window.matchMedia("(max-width: 800px)").addEventListener("change", function (evento) {
  if (!evento.matches) definirMenuAberto(false);
});
