# Tarefa — Santiago — Página One to One

Santiago, você vai montar a **página do One to One**, o estúdio de personal training para todas as idades. Ela usa o azul **mais sóbrio** (`var(--azul-onetoone)` e `var(--gradiente-onetoone)`), não o azul vivo da PKZ.

## O que você edita

- `onetoone.html`: só dentro do `<main>`, nos blocos marcados com `— Santiago`
- `css/onetoone.css`
- `img/onetoone/` (se precisar de imagem)

## O que você NÃO pode mexer

- `css/base.css`
- O header e o footer de qualquer página
- Os arquivos das outras pessoas

## Tela de referência

- [03-one-to-one.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/03-one-to-one.png) (no repo React: `docs/prototipo/telas/03-one-to-one.png`)

## Conteúdo da sua parte

### 1. Hero (`#hero`), fundo `var(--gradiente-onetoone)`
- Etiqueta: **ONE TO ONE · PERSONAL TRAINING**
- Título (h1): **SEU TREINO, SEU RITMO**
- Subtítulo: "Personal training para todas as idades — atletas e não atletas — para você performar melhor no esporte que gosta: futevôlei, corrida, o que for."
- Botões (`botao botao-claro`): "Agendar meu treino" (`agendamento.html`) e "Conhecer o estúdio ↓" (`#sobre`)
- 3 números pequenos: **80+** alunos ativos · **3** alunos no máximo por horário · **2** unidades
- À direita, área de foto: "Foto · aluna em treino funcional"

### 2. Sobre nós (`#sobre`), fundo branco, texto à esquerda e foto à direita
- Etiqueta: **SOBRE NÓS**
- Título (h2): **PERSONAL DE VERDADE**
- Parágrafo 1: "O One to One nasceu como estúdio de personal training na Barra da Tijuca e hoje atende mais de 80 alunos, de todas as idades. Atletas e não atletas treinam aqui para ganhar força, condicionamento e performance no esporte que praticam."
- Parágrafo 2: "Cada professor atende no máximo três alunos por horário. Assim, ele sabe o que você treinou na última aula, como você se sentiu e o que vem a seguir."
- Etiquetas pequenas: HIPERTROFIA · FUTEVÔLEI · CORRIDA · MOBILIDADE
- Foto: "Foto · estúdio One to One"

### 3. Modalidades (`#modalidades`), fundo claro (`secao-clara`)
- Etiqueta: **O QUE VOCÊ PODE TREINAR**
- Título (h2): **UM TREINO PARA CADA OBJETIVO**
- Subtítulo: "Todos os treinos são individualizados — o que muda é onde você quer chegar."
- 4 cards brancos, cada um com uma foto pequena em cima:
  - **Força e hipertrofia**: Treinos de membros superiores e inferiores com progressão planejada.
  - **Performance no esporte**: Preparação específica para futevôlei, corrida, beach tennis e outros.
  - **Condicionamento e saúde**: Para quem quer mais disposição, resistência e qualidade de vida.
  - **Retorno pós-lesão**: Treino acompanhado, levando em conta os laudos do fisioterapeuta.

### 4. Diferenciais (`#diferenciais`), fundo azul-marinho (`secao-escura`)
- Etiqueta: **POR QUE O ONE TO ONE**
- Título (h2): **TECNOLOGIA NO TREINO**
- 4 caixas com número grande e legenda:
  - **3**: alunos no máximo por professor em cada horário
  - **100%**: dos treinos com relatório do professor
  - **0**: mensagens para saber se tem vaga — você agenda sozinho
  - **1 clique**: para o professor ver o que você treinou na última aula

### 5. Avaliações de clientes (`#avaliacoes`), fundo branco
- Etiqueta: **CLIENTES SATISFEITOS**
- Título (h2), centralizado: **QUEM TREINA, RECOMENDA**
- Nota grande: **4,9** ★★★★★ "nota média que os alunos dão aos treinos"
- 3 cards claros com ★★★★★, depoimento, nome e etiqueta da modalidade:
  - "Voltei a jogar futevôlei sem dor no joelho. O professor lembrava de cada detalhe da aula anterior." · Mariana, 34 anos · FUTEVÔLEI
  - "Agendar é muito fácil, faço tudo pelo celular. E o treino é realmente pensado pra mim." · Carlos, 52 anos · CONDICIONAMENTO
  - "Baixei meu tempo nos 10 km em quatro meses. A evolução fica registrada e dá pra ver." · Juliana, 28 anos · CORRIDA
- Texto pequeno embaixo: "Avaliações e depoimentos ilustrativos"

### 6. Unidades (`#unidades`), fundo claro (`secao-clara`)
- Etiqueta: **ONDE ESTAMOS**
- Título (h2): **DUAS UNIDADES PARA VOCÊ**
- 2 cards brancos, cada um com uma área de mapa em cima ("Foto · mapa · ..."):
  - **Barra da Tijuca**: Estúdio principal, ao lado da PKZ. Botão `botao botao-escuro` "Ver no mapa" (link do Google Maps, abrindo em nova aba com `target="_blank"`)
  - **Shopping Square**: Unidade nova, mais perto de quem mora ou trabalha na região. Botão "Ver no mapa"

### 7. Chamada para agendar (`#agendar`), fundo `var(--gradiente-onetoone)`, centralizado
- Título (h2, branco): **BORA TREINAR?**
- Texto: "Escolha o dia no calendário e o horário que funciona para você."
- Botão (`botao botao-claro`): "Escolher dia no calendário →" (`agendamento.html`)

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
git checkout -b santiago
```

Nas próximas vezes, só entre nela:

```bash
git checkout santiago
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
git add onetoone.html css/onetoone.css
git commit -m "adiciona hero do one to one"
```

A mensagem tem que dizer o que você fez, curta e em português. Exemplos: "adiciona hero", "ajusta espaçamento dos cards". Não use "update" nem "teste".

**7. Envie para o GitHub**

Na primeira vez:

```bash
git push -u origin santiago
```

Nas próximas, só `git push`.

**8. Abra o Pull Request**

1. Entre em https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-vanilla
2. Vai aparecer um aviso amarelo "**santiago** had recent pushes". Clique em **Compare & pull request**.
3. Confira se está assim: `base: main` ← `compare: santiago`.
4. Coloque um título claro (ex.: "adiciona hero do one to one") e, na descrição, uma linha sobre o que foi feito.
5. Clique em **Create pull request**.

Eu reviso e faço o merge. **Não clique em "Merge" você mesmo.** Se eu pedir ajuste, faça na mesma branch, repita os passos 5 a 7, e o PR atualiza sozinho.

Commits pequenos ao longo da semana são melhores do que um commitzão no último dia.

## Checklist antes de abrir o PR

- [ ] Hero com título, subtítulo, 2 botões, 3 números e foto
- [ ] Sobre nós com os 2 parágrafos e as etiquetas
- [ ] 4 cards de modalidades
- [ ] 4 diferenciais na faixa escura
- [ ] Nota 4,9 e 3 avaliações
- [ ] 2 unidades com botão "Ver no mapa"
- [ ] Chamada final com botão para `agendamento.html`
- [ ] Usei o azul sóbrio do One to One, não o azul vivo da PKZ
- [ ] Testei no navegador e na largura de celular (F12 → ícone de celular)
- [ ] `git status` mostra só os meus arquivos
- [ ] PR aberto da branch `santiago` para a `main`

Qualquer dúvida, me chama. — Leonardo
