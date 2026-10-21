# Tarefa — Arthur — Página de confirmação

Arthur, você vai montar a **página de agendamento confirmado**, que aparece depois que a pessoa preenche o modal do agendamento (feito pelo David). No protótipo ela é um modal por cima do calendário; aqui no site ela é uma página própria, com um card centralizado.

## O que você edita

- `confirmado.html`: só dentro do `<main>`, no bloco marcado com `— Arthur`
- `css/confirmado.css`
- `js/confirmado.js`
- `img/confirmado/` (se precisar de imagem)

## O que você NÃO pode mexer

- `css/base.css`
- O header e o footer de qualquer página
- Os arquivos das outras pessoas
- `agendamento.html` e `js/agendamento.js` (são do David)

## Tela de referência

- [06-agendamento-confirmado.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/06-agendamento-confirmado.png) (no repo React: `docs/prototipo/telas/06-agendamento-confirmado.png`)

## Conteúdo da sua parte

A página usa o header branco (`header-claro`), que já está pronto. Coloque o fundo da seção claro (`var(--fundo-claro)`) e um card branco centralizado.

### Confirmação (`#confirmacao`)
- Círculo verde (`var(--verde)`) com um ✓ branco
- Título: **Agendamento confirmado!**
- Texto: "Enviamos a confirmação para **(21) 98888-7777**." (o telefone vem da URL)
- Caixa de resumo, com o rótulo à esquerda e o valor em negrito à direita:
  - Dia: **Quarta, 14/10/2026**
  - Horário: **18:00**
  - Estúdio: **PKZ · Barra da Tijuca**
  - Aluno: **Lucas Andrade**
- Aviso: "Você recebe a confirmação no WhatsApp, e nossa equipe entra em contato se precisar de algo."
- Botões:
  - **Voltar ao início** (`botao botao-escuro`, link para `index.html`)
  - **Falar no WhatsApp** (link `https://wa.me/5521900000000`)
- No protótipo também tem "Ver meus agendamentos". **Não faça esse botão**: ele depende de login, que está fora do escopo da AP2.

### Como os dados chegam
O David manda os dados pela URL, assim:

```
confirmado.html?nome=Lucas+Andrade&telefone=(21)+98888-7777&estudio=PKZ&dia=2026-10-14&horario=18:00
```

No `js/confirmado.js`, leia com:

```js
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");
```

e coloque cada valor no lugar certo do HTML (por exemplo, com `document.getElementById("resumo-nome").textContent = nome`).

- O dia chega como `2026-10-14`; mostre como `Quarta, 14/10/2026`. Dica: `new Date(dia + "T12:00")` e um array com os nomes dos dias da semana.
- Se a página for aberta sem nada na URL, mostre os dados de exemplo acima, para ela nunca ficar vazia.
- Enquanto o David não terminar, teste colando a URL de exemplo no navegador depois do `confirmado.html`.

## Regras que valem para todo mundo

- **Não edite o `css/base.css`.** Ele tem as cores, as fontes, o header, o footer e os botões. Se precisar de alguma mudança nele, fala comigo.
- **Não edite o header nem o footer** dos HTMLs.
- **Não mexa na parte de outra pessoa**, nem para "só arrumar um detalhe". Viu algo errado? Avise no grupo.
- Use as variáveis de cor e as classes que já estão no `base.css`, para o site todo ficar com a mesma cara:
  - Cores: `var(--azul-marinho)`, `var(--azul-pkz)`, `var(--azul-onetoone)`, `var(--lilas)`, `var(--texto-suave)`
  - Seções: `.container` (centraliza o conteúdo), `.secao` (espaço em cima e embaixo), `.secao-clara` (fundo cinza claro), `.secao-escura` (fundo azul-marinho), `.secao-pkz` (gradiente azul da PKZ) e `.secao-onetoone` (gradiente do One to One). Nas três escuras, o texto já fica branco.
  - Textos: `.etiqueta` (texto pequeno em cima do título), `.subtitulo`, `.numero` (número grande, ex.: 140+)
  - Organização: `.grade-2`, `.grade-3`, `.grade-4` (colunas que viram uma só no celular) e `.card` (caixa branca com borda e sombra)
  - Detalhes: `.pilula` (etiqueta arredondada, ex.: FUTEVÔLEI), `.estrelas` (★★★★★ em amarelo), `.foto` (área de foto/vídeo)
  - Botões: `.botao .botao-claro` (sobre fundo escuro) e `.botao .botao-escuro` (sobre fundo claro)
- Se precisar mudar algo dessas classes só na sua página, sobrescreva no **seu** CSS, nunca no `base.css`.
- Onde no protótipo tem "FOTO" ou "VÍDEO", use `<div class="foto">Foto · descrição</div>`. As fotos reais entram depois.
- Todos os dados (números, nomes, depoimentos) são fictícios, exatamente como no protótipo.
- Protótipo no Figma, para ver em tamanho grande: https://www.figma.com/design/CQmuVXYjxTUkLDg5CzWbk0

## Passo a passo no Git

Faça na ordem. Se der qualquer erro, me manda print no grupo antes de tentar "consertar".

**1. Clonar o repositório (só na primeira vez)**

```bash
git clone https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-vanilla.git
cd PFE-2026-2-AP2-Grupo3-terca-vanilla
```

**2. Criar a sua branch (só na primeira vez)**

```bash
git checkout -b arthur
```

Nas próximas vezes, só entre nela:

```bash
git checkout arthur
```

**3. Antes de começar a mexer, puxe o que já foi aprovado na main**

```bash
git pull origin main
```

**4. Edite os seus arquivos.** Para ver o resultado, abra o `.html` no navegador (ou use a extensão Live Server do VS Code).

**5. Confira o que mudou.** Só os seus arquivos podem aparecer na lista:

```bash
git status
```

Se aparecer arquivo de outra pessoa ou o `css/base.css`, desfaça com `git restore nome-do-arquivo` e me avise.

**6. Salve no Git (commit)**

```bash
git add confirmado.html css/confirmado.css js/confirmado.js
git commit -m "adiciona pagina de confirmacao"
```

A mensagem tem que dizer o que você fez, curta e em português. Exemplos: "adiciona hero", "ajusta espaçamento dos cards". Não use "update" nem "teste".

**7. Envie para o GitHub**

Na primeira vez:

```bash
git push -u origin arthur
```

Nas próximas, só `git push`.

**8. Abra o Pull Request**

1. Entre em https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-vanilla
2. Vai aparecer um aviso amarelo "**arthur** had recent pushes". Clique em **Compare & pull request**.
3. Confira se está assim: `base: main` ← `compare: arthur`.
4. Coloque um título claro (ex.: "adiciona pagina de confirmacao") e, na descrição, uma linha sobre o que foi feito.
5. Clique em **Create pull request**.

Eu reviso e faço o merge. **Não clique em "Merge" você mesmo.** Se eu pedir ajuste, faça na mesma branch, repita os passos 5 a 7, e o PR atualiza sozinho.

Commits pequenos ao longo da semana são melhores do que um commitzão no último dia.

## Checklist antes de abrir o PR

- [ ] Card centralizado com ✓ verde, título e texto do telefone
- [ ] Resumo com dia, horário, estúdio e aluno
- [ ] Dados lidos da URL, com exemplo se não vier nada
- [ ] Dia formatado como "Quarta, 14/10/2026"
- [ ] Botões "Voltar ao início" e "Falar no WhatsApp"
- [ ] Sem o botão "Ver meus agendamentos"
- [ ] Testei no navegador e na largura de celular (F12 → ícone de celular)
- [ ] `git status` mostra só os meus arquivos
- [ ] PR aberto da branch `arthur` para a `main`

Qualquer dúvida, me chama. — Leonardo
