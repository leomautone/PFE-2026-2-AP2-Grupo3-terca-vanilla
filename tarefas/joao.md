# Tarefa — João — Página PKZ (primeira metade)

João, você e o Kaue dividem a **página da PKZ**. Você faz a primeira metade: hero, faixa de confiança, sobre nós e como funciona. A página fala com os **pais** de jovens atletas, então o tom é de confiança e clareza.

## O que você edita

- `pkz.html`: só entre `PARTE DO JOÃO` e `FIM DA PARTE DO JOÃO`
- `css/pkz-joao.css`
- `img/pkz/` (se precisar de imagem)

## O que você NÃO pode mexer

- A parte do Kaue no `pkz.html` (de `PARTE DO KAUE` em diante)
- `css/pkz-kaue.css`
- `css/base.css`
- O header e o footer de qualquer página
- Os arquivos das outras pessoas

## Tela de referência

- [02-pkz.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/02-pkz.png) (no repo React: `docs/prototipo/telas/02-pkz.png`)

## Conteúdo da sua parte

**Importante:** você e o Kaue usam o mesmo HTML. Para os estilos de um não bagunçarem os do outro, **toda regra do seu CSS começa pelo id de uma das suas seções**. Por exemplo: `#hero h1 { ... }`, `#sobre .foto { ... }`. Nada de estilizar `h2` ou `.card` "solto".

### 1. Hero (`#hero`), fundo azul vivo (`var(--gradiente-pkz)`)
- Etiqueta: **PKZ · CRIANÇAS E ADOLESCENTES ATLETAS**
- Título (h1): **AQUI NASCEM ATLETAS**
- Subtítulo: "Preparação física para jovens atletas com avaliação completa, treino planejado mês a mês e um relatório visual que você entende em um minuto."
- Botões (`botao botao-claro`): "Agendar avaliação do meu filho" (`agendamento.html`) e "Ver como acompanhamos ↓" (`#como-funciona`)
- À direita, área de foto: "Foto · atletas PKZ em treino"

### 2. Faixa de confiança (`#confianca`), faixa lilás clara (`var(--lilas)`), 4 itens lado a lado
- **Comparado com a mesma idade**: Seu filho é avaliado dentro da própria faixa etária e modalidade.
- **Presença confirmada**: O professor confirma a presença do atleta em todo treino.
- **Relatório todo mês**: Evolução em gráficos simples, sem 17 páginas de texto.
- **Equipe próxima**: Automatizamos processos, não o relacionamento com a família.

### 3. Sobre nós (`#sobre`), fundo branco, foto à esquerda e texto à direita
- Foto: "Foto · Henrique com os atletas"
- Etiqueta: **SOBRE NÓS**
- Título (h2): **NOSSA HISTÓRIA**
- Parágrafo 1: "O Henrique trabalha há anos com preparação física de atletas. Começou atendendo de carro e de moto, em clubes e condomínios da Barra, do Recreio e da Zona Sul — até a procura ficar grande demais para rodar a cidade."
- Parágrafo 2: "Foi aí que nasceu a PKZ: um centro de treinamento pensado para jovens atletas, ao lado do estúdio One to One. Hoje são cerca de 60 atletas treinando com um plano feito sob medida para cada um."
- Citação em destaque (caixa lilás): "A tecnologia existe para facilitar — a conexão com o atleta e com a família é o que faz a PKZ ser a PKZ." — Henrique, fundador

### 4. Como funciona (`#como-funciona`), fundo claro (`secao-clara`)
- Etiqueta: **COMO ACOMPANHAMOS SEU FILHO**
- Título (h2): **PASSO A PASSO**
- Subtítulo: "Um ciclo simples, que se repete todo mês — e que você acompanha de perto."
- 4 cards brancos numerados, lado a lado (número grande em Oswald, azul):
  - **01 · Avaliação inicial**: Mais de 16 testes físicos no primeiro dia: salto, velocidade, agilidade, tempo de reação e foco.
  - **02 · Plano do mês**: Com base nos resultados, montamos o ciclo de treinos do mês, sob medida para o atleta.
  - **03 · Treino com registro**: A cada aula o professor registra o que foi treinado e como o atleta respondeu.
  - **04 · Reteste e relatório**: Um mês depois, repetimos os testes e você recebe a evolução em gráficos.

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
git checkout -b joao
```

Nas próximas vezes, só entre nela:

```bash
git checkout joao
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
git add pkz.html css/pkz-joao.css
git commit -m "adiciona hero da pkz"
```

A mensagem tem que dizer o que você fez, curta e em português. Exemplos: "adiciona hero", "ajusta espaçamento dos cards". Não use "update" nem "teste".

**7. Envie para o GitHub**

Na primeira vez:

```bash
git push -u origin joao
```

Nas próximas, só `git push`.

**8. Abra o Pull Request**

1. Entre em https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-vanilla
2. Vai aparecer um aviso amarelo "**joao** had recent pushes". Clique em **Compare & pull request**.
3. Confira se está assim: `base: main` ← `compare: joao`.
4. Coloque um título claro (ex.: "adiciona hero da pkz") e, na descrição, uma linha sobre o que foi feito.
5. Clique em **Create pull request**.

Eu reviso e faço o merge. **Não clique em "Merge" você mesmo.** Se eu pedir ajuste, faça na mesma branch, repita os passos 5 a 7, e o PR atualiza sozinho.

Commits pequenos ao longo da semana são melhores do que um commitzão no último dia.

## Checklist antes de abrir o PR

- [ ] Hero com etiqueta, título, subtítulo, 2 botões e área de foto
- [ ] Faixa de confiança com 4 itens
- [ ] Sobre nós com foto, 2 parágrafos e a citação
- [ ] Como funciona com os 4 cards numerados
- [ ] Todas as regras do `pkz-joao.css` começam por `#hero`, `#confianca`, `#sobre` ou `#como-funciona`
- [ ] Não alterei nada da parte do Kaue
- [ ] Testei no navegador e na largura de celular (F12 → ícone de celular)
- [ ] `git status` mostra só os meus arquivos
- [ ] PR aberto da branch `joao` para a `main`

Qualquer dúvida, me chama. — Leonardo
