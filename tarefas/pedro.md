# Tarefa — Pedro Henrique — Página inicial

Pedro, você vai montar a **página inicial** (Home). É a primeira coisa que o cliente vê, então capricha no hero.

## O que você edita

- `index.html`: só dentro do `<main>`, nos blocos marcados com `— Pedro Henrique`
- `css/index.css`
- `img/index/` (se precisar de imagem)

## O que você NÃO pode mexer

- `css/base.css`
- O header e o footer de qualquer página
- Os arquivos das outras pessoas

## Tela de referência

- [01-home.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/01-home.png) (no repo React: `docs/prototipo/telas/01-home.png`)

## Conteúdo da sua parte

### 1. Hero (`#hero`), tela cheia, fundo azul (`var(--gradiente-pkz)`)
- Etiqueta: **BARRA DA TIJUCA · SHOPPING SQUARE**
- Título (h1): **NASCIDOS PARA PERFORMAR**
- Subtítulo: "Dois estúdios, uma mesma equipe: PKZ para crianças e adolescentes atletas, One to One para personal training de todas as idades."
- Botões (`botao botao-claro`): "Conhecer os estúdios ↓" (link para `#estudios`) e "Agendar aula experimental" (link para `agendamento.html`)
- À direita, área de foto: "Foto / vídeo · vídeo em loop de treinos"
- Embaixo, centralizado: "Role para escolher seu estúdio ↓"

### 2. Números (`#numeros`), faixa azul-marinho
Quatro números lado a lado (número grande em Oswald e legenda pequena):
- **140+**: alunos ativos nos dois estúdios
- **16+**: testes físicos na avaliação inicial
- **2**: unidades, Barra e Shopping Square
- **1×/mês**: reavaliação com relatório visual

### 3. Escolha seu caminho (`#estudios`), fundo claro
- Etiqueta: **DOIS ESTÚDIOS, UMA EQUIPE**
- Título (h2), centralizado: **ESCOLHA SEU CAMINHO**
- Subtítulo: "Cada estúdio tem seu foco. Escolha o que combina com você — ou com o seu filho."
- Dois cards lado a lado, com fundo de foto/vídeo (por enquanto o gradiente):
  - **Card PKZ** (azul vivo, `var(--gradiente-pkz)`): etiqueta "Crianças e adolescentes", título **PKZ**, texto "Preparação física para jovens atletas, com avaliação completa e relatórios que os pais entendem de verdade.", lista: "Mais de 16 testes físicos por faixa etária", "Plano de treino mensal para cada atleta", "Relatório visual mensal para os pais". Botão "Conhecer a PKZ →" (`pkz.html`).
  - **Card One to One** (azul sóbrio, `var(--gradiente-onetoone)`): etiqueta "Todas as idades", título **ONE TO ONE**, texto "Personal training para atletas e não atletas performarem melhor no esporte que gostam.", lista: "No máximo 3 alunos por horário", "Treino anterior sempre à mão do professor", "Agendamento sem precisar perguntar se tem vaga". Botão "Conhecer o One to One →" (`onetoone.html`).
- Extra (se der tempo): ao passar o mouse, o card mostra a frase "Aqui nascem atletas." (PKZ) / "Seu treino, seu ritmo." (One to One). Dá para fazer só com CSS (`:hover`).

## Regras que valem para todo mundo

- **Não edite o `css/base.css`.** Ele tem as cores, as fontes, o header, o footer e os botões. Se precisar de alguma mudança nele, fala comigo.
- **Não edite o header nem o footer** dos HTMLs.
- **Não mexa na parte de outra pessoa**, nem para "só arrumar um detalhe". Viu algo errado? Avise no grupo.
- Use as variáveis de cor e as classes que já estão no `base.css`: `var(--azul-marinho)`, `var(--azul-pkz)`, `.container`, `.secao`, `.secao-clara`, `.secao-escura`, `.etiqueta`, `.subtitulo`, `.foto`, `.botao .botao-claro` (sobre fundo escuro) e `.botao .botao-escuro` (sobre fundo claro).
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
git checkout -b pedro
```

Nas próximas vezes, só entre nela:

```bash
git checkout pedro
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
git add index.html css/index.css
git commit -m "adiciona hero da home"
```

A mensagem tem que dizer o que você fez, curta e em português. Exemplos: "adiciona hero", "ajusta espaçamento dos cards". Não use "update" nem "teste".

**7. Envie para o GitHub**

Na primeira vez:

```bash
git push -u origin pedro
```

Nas próximas, só `git push`.

**8. Abra o Pull Request**

1. Entre em https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-vanilla
2. Vai aparecer um aviso amarelo "**pedro** had recent pushes". Clique em **Compare & pull request**.
3. Confira se está assim: `base: main` ← `compare: pedro`.
4. Coloque um título claro (ex.: "adiciona hero da home") e, na descrição, uma linha sobre o que foi feito.
5. Clique em **Create pull request**.

Eu reviso e faço o merge. **Não clique em "Merge" você mesmo.** Se eu pedir ajuste, faça na mesma branch, repita os passos 5 a 7, e o PR atualiza sozinho.

Commits pequenos ao longo da semana são melhores do que um commitzão no último dia.

## Checklist antes de abrir o PR

- [ ] Hero em tela cheia com título, subtítulo, 2 botões e área de foto
- [ ] Faixa com os 4 números
- [ ] Seção "Escolha seu caminho" com os 2 cards lado a lado
- [ ] Botões levando para `#estudios`, `pkz.html`, `onetoone.html` e `agendamento.html`
- [ ] No celular, os cards ficam um embaixo do outro
- [ ] Testei no navegador e na largura de celular (F12 → ícone de celular)
- [ ] `git status` mostra só os meus arquivos
- [ ] PR aberto da branch `pedro` para a `main`

Qualquer dúvida, me chama. — Leonardo
