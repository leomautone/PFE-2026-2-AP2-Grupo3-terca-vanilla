# Tarefa — David — Página de agendamento

David, você vai montar a **página de agendamento**, a parte mais interativa do site vanilla. No vanilla, o agendamento é **só visual**: nada é enviado para servidor. A disponibilidade de cada dia é inventada, fixa no JavaScript. Na versão React é que ele vai ser ligado ao back-end.

## O que você edita

- `agendamento.html`: só dentro do `<main>`, nos blocos marcados com `— David`
- `css/agendamento.css`
- `js/agendamento.js`
- `img/agendamento/` (se precisar de imagem)

## O que você NÃO pode mexer

- `css/base.css`
- O header e o footer de qualquer página
- Os arquivos das outras pessoas
- `confirmado.html` e `js/confirmado.js` (são do Arthur; combine com ele só o formato da URL, que está abaixo)

## Tela de referência

- [04-agendamento-calendario.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/04-agendamento-calendario.png) (no repo React: `docs/prototipo/telas/04-agendamento-calendario.png`)
- [05a-agendamento-incompleto.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/05a-agendamento-incompleto.png) (no repo React: `docs/prototipo/telas/05a-agendamento-incompleto.png`)
- [05b-agendamento-erro.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/05b-agendamento-erro.png) (no repo React: `docs/prototipo/telas/05b-agendamento-erro.png`)
- [05-agendamento-mini-tela.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/05-agendamento-mini-tela.png) (no repo React: `docs/prototipo/telas/05-agendamento-mini-tela.png`)

## Conteúdo da sua parte

A página usa o header branco (`header-claro`), que já está pronto.

### 1. Calendário (`#calendario`), card branco grande à esquerda
- Título: **AGENDE SEU TREINO**
- Texto: "Clique em um dia disponível para escolher o horário."
- Filtro por estúdio, 3 botões tipo "pílula": **Todos** · **PKZ** · **One to One** (o selecionado fica azul-marinho)
- Navegação de mês: "‹ Setembro" · **Outubro 2026** · "Novembro ›"
- Grade de 7 colunas: DOM SEG TER QUA QUI SEX SÁB
- Cada dia mostra o número e uma bolinha colorida com o status:
  - verde (`var(--verde)`): "6 horários" (muitos horários livres)
  - laranja (`var(--laranja)`): "2 horários" (poucos horários)
  - vermelho (`var(--vermelho)`): "Lotado"
  - cinza (`var(--cinza)`): "Fechado" (domingos), com o fundo do dia mais apagado
  - Dias que já passaram ficam apagados, e o dia de hoje mostra "Hoje".
- Só os dias livres ou com poucos horários podem ser clicados.

### 2. Lateral (`#lateral`), 3 cards à direita
- **Como funciona**: 1. Escolha um dia com horários livres · 2. Informe nome, horário e telefone · 3. Receba a confirmação da equipe
- **Legenda**: Muitos horários livres · Poucos horários · Lotado · Estúdio fechado (com as bolinhas coloridas)
- Card azul-marinho **Prefere falar com alguém?**: "Nossa recepção ajuda você a encontrar o melhor horário." Botão `botao botao-claro` "Chamar no WhatsApp" (link `https://wa.me/5521900000000`)

### 3. Modal do dia (`#modal`), aparece por cima com o fundo escurecido
- Título: data por extenso, ex.: **Quarta-feira, 14 de outubro**, e embaixo "Preencha os dados para reservar seu horário."
- Botão **×** para fechar
- Campos:
  - **Nome do aluno** (texto)
  - **Telefone (WhatsApp)**, placeholder "(21) 9 0000-0000"
  - **Estúdio**: 2 botões, PKZ e One to One
  - **Horário**: 8 botões em grade (07:00, 08:00, 09:00, 10:00, 16:00, 17:00, 18:00, 19:00), cada um com "livre" ou "lotado" embaixo. Os lotados ficam apagados e não podem ser clicados; o escolhido fica azul com "selecionado".
- Aviso: "Você recebe a confirmação no WhatsApp, e nossa equipe entra em contato se precisar de algo."
- Botões: **Cancelar** (fecha o modal) e **Confirmar agendamento**

### 4. Validação ao clicar em "Confirmar agendamento" (tela 05b)
- Se faltar alguma coisa, aparece uma caixa vermelha no topo do modal: **"Faltam informações para confirmar"** e embaixo o que falta (ex.: "Preencha o telefone e escolha um horário.").
- O campo que falta fica com a borda vermelha e uma mensagem embaixo:
  - nome vazio: "Informe o nome do aluno."
  - telefone vazio: "Informe um telefone para contato."
  - sem horário: "Escolha um horário para continuar."
- Quando o usuário preenche o campo, o vermelho some.

### 5. Ida para a página de confirmação
Se estiver tudo certo, leve o usuário para `confirmado.html` passando os dados **na URL**. É assim que o Arthur vai ler, então use exatamente estes nomes:

```js
const params = new URLSearchParams({
  nome: "Lucas Andrade",
  telefone: "(21) 98888-7777",
  estudio: "PKZ",           // "PKZ" ou "One to One"
  dia: "2026-10-14",        // ano-mês-dia
  horario: "18:00"
});
window.location.href = "confirmado.html?" + params.toString();
```

(Os valores acima são só exemplo: use o que a pessoa preencheu.)

### Dicas de JavaScript
- Guarde a disponibilidade num objeto simples, ex.: `const dias = { 1: "livre", 3: "poucos", 5: "lotado", ... }`.
- Pode começar fazendo só outubro de 2026, com a grade montada direto no HTML. Se sobrar tempo, gere a grade pelo JS e faça os botões de mês funcionarem.
- O filtro pode só trocar o objeto de disponibilidade (um para PKZ, outro para One to One).
- Se apertar o tempo, a prioridade é: calendário → modal abrindo e fechando → validação → ida para o confirmado. O filtro e a troca de mês são extras.

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
git checkout -b david
```

Nas próximas vezes, só entre nela:

```bash
git checkout david
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
git add agendamento.html css/agendamento.css js/agendamento.js
git commit -m "adiciona calendario do agendamento"
```

A mensagem tem que dizer o que você fez, curta e em português. Exemplos: "adiciona hero", "ajusta espaçamento dos cards". Não use "update" nem "teste".

**7. Envie para o GitHub**

Na primeira vez:

```bash
git push -u origin david
```

Nas próximas, só `git push`.

**8. Abra o Pull Request**

1. Entre em https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-vanilla
2. Vai aparecer um aviso amarelo "**david** had recent pushes". Clique em **Compare & pull request**.
3. Confira se está assim: `base: main` ← `compare: david`.
4. Coloque um título claro (ex.: "adiciona calendario do agendamento") e, na descrição, uma linha sobre o que foi feito.
5. Clique em **Create pull request**.

Eu reviso e faço o merge. **Não clique em "Merge" você mesmo.** Se eu pedir ajuste, faça na mesma branch, repita os passos 5 a 7, e o PR atualiza sozinho.

Commits pequenos ao longo da semana são melhores do que um commitzão no último dia.

## Checklist antes de abrir o PR

- [ ] Calendário de outubro/2026 com as cores de disponibilidade
- [ ] Lateral com Como funciona, Legenda e WhatsApp
- [ ] Clicar num dia disponível abre o modal com a data certa
- [ ] Cancelar e × fecham o modal
- [ ] Validação com aviso vermelho e campos destacados
- [ ] Com tudo preenchido, vai para `confirmado.html?nome=...&telefone=...&estudio=...&dia=...&horario=...`
- [ ] Testei no navegador e na largura de celular (F12 → ícone de celular)
- [ ] `git status` mostra só os meus arquivos
- [ ] PR aberto da branch `david` para a `main`

Qualquer dúvida, me chama. — Leonardo
