// Base — Leonardo
// abre e fecha o menu no celular

const menuBotao = document.querySelector(".menu-botao");
const header = document.querySelector(".header");

menuBotao.addEventListener("click", function () {
  header.classList.toggle("menu-aberto");
  const aberto = header.classList.contains("menu-aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
});

// fecha o menu ao clicar em um link (ex.: Contato)
document.querySelectorAll(".menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.remove("menu-aberto");
    menuBotao.setAttribute("aria-expanded", false);
  });
});
