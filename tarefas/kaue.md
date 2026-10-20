# Tarefa — Kaue — Página PKZ (segunda metade)

Kaue, você e o João dividem a **página da PKZ**. Você faz a segunda metade: prévia do relatório, cuidado e segurança, depoimentos, perguntas frequentes e a chamada final para agendar.

## O que você edita

- `pkz.html`: só entre `PARTE DO KAUE` e `FIM DA PARTE DO KAUE`
- `css/pkz-kaue.css`
- `img/pkz/` (se precisar de imagem)

## O que você NÃO pode mexer

- A parte do João no `pkz.html` (até `FIM DA PARTE DO JOÃO`)
- `css/pkz-joao.css`
- `css/base.css`
- O header e o footer de qualquer página
- Os arquivos das outras pessoas

## Tela de referência

- [02-pkz.png](https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-react/blob/main/docs/prototipo/telas/02-pkz.png) (no repo React: `docs/prototipo/telas/02-pkz.png`)

## Conteúdo da sua parte

**Importante:** você e o João usam o mesmo HTML. Para os estilos de um não bagunçarem os do outro, **toda regra do seu CSS começa pelo id de uma das suas seções**. Por exemplo: `#faq h3 { ... }`, `#depoimentos .card { ... }`.

### 1. Prévia do relatório (`#relatorio`), fundo azul-marinho (`secao-escura`)
É **só ilustrativa**: um desenho fixo em HTML/CSS, sem dados reais e sem login. Ela precisa aparecer como exemplo para quem visita o site (ver o último item abaixo).
- Etiqueta: **RELATÓRIO VISUAL MENSAL**
- Título (h2): **EVOLUÇÃO EM 1 MINUTO**
- Subtítulo: "Nada de relatório de 17 páginas. Gráficos simples, comparação com atletas da mesma idade e um recado do professor."
- Lista: "Setas e cores mostram o que melhorou", "Comparação com a mesma faixa etária", "Comentário escrito pelo professor", "Botão para falar direto com a equipe"
- À direita, um card branco de exemplo:
  - **Lucas, 12 anos**, "Futebol · Relatório de setembro", selo verde "EVOLUIU EM 3 DE 3"
  - 3 barras (uma `div` com largura em %): Velocidade (20 m) ↑ +8% · Salto vertical ↑ +12% · Agilidade ↑ +5%
  - Caixa "Recado do professor": "Lucas está mais rápido na saída. Próximo mês vamos focar em mudança de direção."
- Embaixo do card, texto pequeno: "Exemplo ilustrativo de relatório. Dados fictícios."

### 2. Cuidado e segurança (`#cuidado`), fundo branco
- Etiqueta: **PARA VOCÊ FICAR TRANQUILO**
- Título (h2): **CUIDADO EM CADA DETALHE**
- 4 cards claros com uma bolinha de ícone em cima:
  - **Turmas por idade**: Atletas treinam e são comparados com quem tem a mesma idade e modalidade.
  - **Saúde registrada**: Laudos e observações (ex.: de fisioterapeuta) são registrados pela equipe e considerados no plano de treino.
  - **Contato direto com a equipe**: Ficou com alguma dúvida sobre o treino? A equipe responde você pelo WhatsApp.
  - **Reteste sem atraso**: O sistema avisa a equipe quando a reavaliação do seu filho está chegando.

### 3. Depoimentos de pais (`#depoimentos`), fundo claro (`secao-clara`)
- Etiqueta: **PAIS QUE ACOMPANHAM**
- Título (h2), centralizado: **O QUE DIZEM AS FAMÍLIAS**
- 3 cards com ★★★★★, um número em destaque, o depoimento e o autor:
  - **-0,3 s** no sprint de 20 m em 3 meses · "Pela primeira vez eu entendi o relatório do meu filho. Os gráficos mostram tudo." · Mãe do Pedro, 11 anos
  - **+15%** no salto vertical em 4 meses · "Ele chega em casa animado para contar o que treinou. E a equipe sempre responde a gente." · Pai da Sofia, 13 anos
  - **4 meses** sem lesão na temporada · "Gosto de saber que tem alguém de olho em cada detalhe, inclusive quando é a babá que leva." · Mãe do Rafael, 9 anos
- Texto pequeno embaixo: "Depoimentos ilustrativos"

### 4. Perguntas frequentes (`#faq`), fundo branco, 4 caixas em 2 colunas
- Etiqueta: **DÚVIDAS FREQUENTES**
- Título (h2): **PERGUNTAS DOS PAIS**
- **A partir de que idade meu filho pode treinar?** Atendemos crianças e adolescentes, sempre avaliados dentro da própria faixa etária.
- **Ele precisa jogar em clube?** Não. A PKZ atende quem já compete e quem quer começar a evoluir no esporte.
- **Como recebo o relatório?** Todo mês, em formato visual, com gráficos e um comentário do professor.
- **Como faço para agendar a avaliação?** Escolha um dia no calendário do site e deixe seu nome e telefone. A equipe confirma pelo WhatsApp.
- Extra (se der tempo): usar `<details>` e `<summary>` para abrir e fechar cada resposta.

### 5. Chamada para agendar (`#agendar`), fundo azul vivo (`var(--gradiente-pkz)`), tudo centralizado
- Título (h2, branco): **AGENDE UMA AVALIAÇÃO**
- Texto: "Escolha um dia no calendário, deixe seu nome e telefone — nossa equipe confirma com você."
- Botão (`botao botao-claro`): "Escolher dia no calendário →" (`agendamento.html`)

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
git checkout -b kaue
```

Nas próximas vezes, só entre nela:

```bash
git checkout kaue
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
git add pkz.html css/pkz-kaue.css
git commit -m "adiciona previa do relatorio da pkz"
```

A mensagem tem que dizer o que você fez, curta e em português. Exemplos: "adiciona hero", "ajusta espaçamento dos cards". Não use "update" nem "teste".

**7. Envie para o GitHub**

Na primeira vez:

```bash
git push -u origin kaue
```

Nas próximas, só `git push`.

**8. Abra o Pull Request**

1. Entre em https://github.com/leomautone/PFE-2026-2-AP2-Grupo3-terca-vanilla
2. Vai aparecer um aviso amarelo "**kaue** had recent pushes". Clique em **Compare & pull request**.
3. Confira se está assim: `base: main` ← `compare: kaue`.
4. Coloque um título claro (ex.: "adiciona previa do relatorio da pkz") e, na descrição, uma linha sobre o que foi feito.
5. Clique em **Create pull request**.

Eu reviso e faço o merge. **Não clique em "Merge" você mesmo.** Se eu pedir ajuste, faça na mesma branch, repita os passos 5 a 7, e o PR atualiza sozinho.

Commits pequenos ao longo da semana são melhores do que um commitzão no último dia.

## Checklist antes de abrir o PR

- [ ] Prévia do relatório com o card de exemplo do Lucas (fixo, só visual) e o aviso "Exemplo ilustrativo"
- [ ] Nenhuma menção a acesso só de leitura nem a perfil do atleta (fora do escopo da AP2)
- [ ] Cuidado em cada detalhe com 4 cards
- [ ] 3 depoimentos de pais
- [ ] Perguntas frequentes com as 4 perguntas
- [ ] Chamada final com botão para `agendamento.html`
- [ ] Todas as regras do `pkz-kaue.css` começam por `#relatorio`, `#cuidado`, `#depoimentos`, `#faq` ou `#agendar`
- [ ] Não alterei nada da parte do João
- [ ] Testei no navegador e na largura de celular (F12 → ícone de celular)
- [ ] `git status` mostra só os meus arquivos
- [ ] PR aberto da branch `kaue` para a `main`

Qualquer dúvida, me chama. — Leonardo
