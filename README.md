# PFE 2026.2 — AP2 — Grupo 3 (terça) — Site vanilla

Site institucional da **PKZ / One to One** feito em **HTML, CSS e JavaScript puro**, para a disciplina **Projeto Front-end** (Ibmec 2026.2).

A PKZ é um estúdio de preparação física para crianças e adolescentes atletas. O One to One é um estúdio de personal training para todas as idades. O site apresenta as duas marcas e tem um agendamento de aula experimental. Aqui no vanilla, o agendamento é **só visual**: nada é enviado para servidor.

- **Site publicado (GitHub Pages):** https://leomautone.github.io/PFE-2026-2-AP2-Grupo3-terca-vanilla/
- **Documentação do projeto** (entrevista, brainstorm, 5W2H, documento de visão, protótipo e Scrum): [repositório React](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react), pasta `docs/`
- **Telas do protótipo:** [docs/prototipo/telas](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/tree/main/docs/prototipo/telas)
- **Protótipo no Figma:** https://www.figma.com/design/CQmuVXYjxTUkLDg5CzWbk0

## Integrantes e divisão

| Integrante | Responsável por | Arquivos | Branch |
|---|---|---|---|
| Leonardo Camero (líder) | Base visual, header, footer, revisão e merge | `css/base.css` | — |
| Pedro Henrique Godoy | Página inicial | `index.html`, `css/index.css` | `pedro` |
| João Duarte | PKZ: hero, faixa de confiança, sobre nós, como funciona | `pkz.html` (blocos do João), `css/pkz-joao.css` | `joao` |
| Kaue Reis | PKZ: prévia do relatório, cuidado e segurança, depoimentos, perguntas frequentes, chamada para agendar | `pkz.html` (blocos do Kaue), `css/pkz-kaue.css` | `kaue` |
| Santiago Alejo | Página One to One | `onetoone.html`, `css/onetoone.css` | `santiago` |
| David Madureira | Agendamento: calendário e modal | `agendamento.html`, `css/agendamento.css`, `js/agendamento.js` | `david` |
| Arthur Aires | Agendamento confirmado | `confirmado.html`, `css/confirmado.css`, `js/confirmado.js` | `arthur` |

As orientações detalhadas de cada um estão em [`tarefas/`](tarefas/).

## Regras do grupo

1. **Ninguém edita o `css/base.css`**, nem o header e o footer. Mudanças na base passam pelo Leonardo.
2. **Cada um edita só a própria parte.** No `pkz.html`, o João e o Kaue têm blocos separados e marcados com comentários; cada um mexe só nos seus blocos e no seu CSS.
3. **Cada um trabalha na própria branch** (com o próprio nome) e abre um Pull Request para a `main`.
4. **Só o Leonardo faz merge na `main`.**
5. Commits pequenos, com mensagem curta em português dizendo o que foi feito.
6. Dados, fotos e depoimentos são fictícios. As áreas "Foto / vídeo" marcam onde entram as imagens reais do cliente.

## Estrutura

```
index.html          página inicial: escolha entre PKZ e One to One
pkz.html            página da PKZ (voltada aos pais de jovens atletas)
onetoone.html       página do One to One (personal training)
agendamento.html    calendário e modal de agendamento
confirmado.html     resumo do agendamento
css/
  base.css          cores, fontes, reset, header, footer e botões (compartilhado)
  index.css, pkz-joao.css, pkz-kaue.css, onetoone.css, agendamento.css, confirmado.css
js/
  agendamento.js    calendário, filtro e validação do modal
  confirmado.js     lê os dados do agendamento e monta o resumo
img/                uma pasta por página
tarefas/            orientações de cada integrante
```

## Identidade visual

- Azul-marinho e branco nas duas marcas, a partir do azul do logo da PKZ (`#000080`). A PKZ usa um azul mais vivo e o One to One um azul mais sóbrio.
- Fontes: **Oswald** nos títulos e **Inter** nos textos.
- Botões brancos com texto azul sobre fundo escuro, e azuis com texto branco sobre fundo claro.

## Como rodar

Não precisa instalar nada: é só abrir o `index.html` no navegador. No VS Code, a extensão Live Server atualiza a página sozinha a cada alteração.
