// Agendamento — David
// calendário, filtro por estúdio e modal do dia

(() => {
    const horarios = ['07:00', '08:00', '09:00', '10:00', '16:00', '17:00', '18:00', '19:00'];
    const estudios = ['PKZ', 'One to One'];
    const calendario = document.querySelector('#dias-calendario');
    const tituloMes = document.querySelector('#mes-atual');
    const filtroBotoes = document.querySelectorAll('[data-filtro]');
    const modal = document.querySelector('#modal');
    const formulario = document.querySelector('#form-agendamento');
    const campoNome = document.querySelector('#nome-aluno');
    const campoTelefone = document.querySelector('#telefone-aluno');
    const opcoesHorario = document.querySelector('#opcoes-horario');
    const avisoFormulario = document.querySelector('#aviso-formulario');
    const resumoErros = document.querySelector('#resumo-erros');
    const dataInicial = new Date(2026, 9, 1);
    let mesVisivel = new Date(dataInicial);
    let filtroAtual = 'Todos';
    let dataSelecionada = null;
    let estudioSelecionado = '';
    let horarioSelecionado = '';
    let elementoAnterior = null;

    const normalizarData = (data) => new Date(data.getFullYear(), data.getMonth(), data.getDate());
    const dataHoje = normalizarData(new Date());

    function obterVagas(data, estudio) {
        if (data.getDay() === 0) return 0;

        const diferencaEstudio = estudio === 'PKZ' ? 0 : 4;
        const semente = (data.getDate() * 7 + data.getMonth() * 3 + diferencaEstudio) % 11;
        if (semente < 2) return 0;
        if (semente < 5) return 2;
        return 6;
    }

    function obterDisponibilidade(data) {
        const estudiosConsiderados = filtroAtual === 'Todos' ? estudios : [filtroAtual];
        const vagas = estudiosConsiderados.map((estudio) => obterVagas(data, estudio));
        return Math.max(...vagas);
    }

    function obterStatus(vagas, data) {
        if (data.getDay() === 0) return { classe: 'ponto-fechado', texto: 'Fechado' };
        if (vagas >= 5) return { classe: 'ponto-livre', texto: '6 horários' };
        if (vagas > 0) return { classe: 'ponto-poucos', texto: '2 horários' };
        return { classe: 'ponto-lotado', texto: 'Lotado' };
    }

    function atualizarNavegacaoMes() {
        const formatarMes = (data) => new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(data);
        tituloMes.textContent = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(mesVisivel);
        document.querySelector('#mes-anterior span').textContent = formatarMes(new Date(mesVisivel.getFullYear(), mesVisivel.getMonth() - 1, 1));
        document.querySelector('#proximo-mes span').textContent = formatarMes(new Date(mesVisivel.getFullYear(), mesVisivel.getMonth() + 1, 1));
    }

    function renderizarCalendario() {
        atualizarNavegacaoMes();
        calendario.replaceChildren();

        const ano = mesVisivel.getFullYear();
        const mes = mesVisivel.getMonth();
        const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
        const totalDias = new Date(ano, mes + 1, 0).getDate();

        for (let vazio = 0; vazio < primeiroDiaSemana; vazio += 1) {
            const celula = document.createElement('span');
            celula.className = 'dia-vazio';
            celula.setAttribute('aria-hidden', 'true');
            calendario.append(celula);
        }

        for (let dia = 1; dia <= totalDias; dia += 1) {
            const data = new Date(ano, mes, dia);
            const vagas = obterDisponibilidade(data);
            const status = obterStatus(vagas, data);
            const passado = data < dataHoje;
            const hoje = data.getTime() === dataHoje.getTime();
            const indisponivel = status.texto === 'Lotado' || status.texto === 'Fechado' || passado;
            const botao = document.createElement('button');
            const rotuloData = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).format(data);

            botao.type = 'button';
            botao.className = `dia-calendario${status.texto === 'Fechado' ? ' fechado' : ''}${passado ? ' passado' : ''}${hoje ? ' hoje' : ''}`;
            botao.disabled = indisponivel;
            botao.setAttribute('role', 'gridcell');
            botao.setAttribute('aria-label', `${rotuloData}: ${hoje ? 'Hoje, ' : ''}${status.texto}${passado ? ', data passada' : ''}`);
            botao.title = `${rotuloData}: ${status.texto}`;
            botao.dataset.data = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;

            const numero = document.createElement('span');
            numero.className = 'dia-numero';
            numero.textContent = String(dia);
            botao.append(numero);

            if (hoje) {
                const marcadorHoje = document.createElement('span');
                marcadorHoje.className = 'dia-hoje';
                marcadorHoje.textContent = 'Hoje';
                botao.append(marcadorHoje);
            }

            const indicador = document.createElement('span');
            indicador.className = 'dia-status';
            indicador.innerHTML = `<span class="status-ponto ${status.classe}" aria-hidden="true"></span><span>${status.texto}</span>`;
            botao.append(indicador);
            calendario.append(botao);
        }

        const totalCelulas = primeiroDiaSemana + totalDias;
        const celulasRestantes = (7 - (totalCelulas % 7)) % 7;
        for (let vazio = 0; vazio < celulasRestantes; vazio += 1) {
            const celula = document.createElement('span');
            celula.className = 'dia-vazio';
            celula.setAttribute('aria-hidden', 'true');
            calendario.append(celula);
        }
    }

    function limparErro(campo) {
        const grupo = document.querySelector(`[data-campo="${campo}"]`);
        grupo.classList.remove('campo-invalido');
        const mensagem = grupo.querySelector('.mensagem-erro');
        mensagem.textContent = '';

        const controle = grupo.querySelector('input');
        if (controle) controle.removeAttribute('aria-invalid');
    }

    function atualizarHorarios() {
        opcoesHorario.replaceChildren();
        horarioSelecionado = '';
        limparErro('horario');

        if (!estudioSelecionado) {
            const ajuda = document.createElement('span');
            ajuda.className = 'horario-ajuda';
            ajuda.textContent = 'Escolha um estúdio para ver os horários disponíveis.';
            opcoesHorario.append(ajuda);
            return;
        }

        const quantidadeLivre = obterVagas(dataSelecionada, estudioSelecionado);
        const indicesLivres = quantidadeLivre === 6
            ? [0, 1, 2, 5, 6, 7]
            : quantidadeLivre === 2 ? [2, 6] : [];

        horarios.forEach((horario, indice) => {
            const disponivel = indicesLivres.includes(indice);
            const botao = document.createElement('button');
            botao.type = 'button';
            botao.className = 'opcao-horario';
            botao.dataset.horario = horario;
            botao.disabled = !disponivel;
            botao.setAttribute('aria-pressed', 'false');
            botao.innerHTML = `<strong>${horario}</strong><span>${disponivel ? 'livre' : 'lotado'}</span>`;
            opcoesHorario.append(botao);
        });
    }

    function abrirModal(data, elemento) {
        dataSelecionada = data;
        estudioSelecionado = filtroAtual === 'Todos' ? '' : filtroAtual;
        horarioSelecionado = '';
        elementoAnterior = elemento;
        campoNome.value = '';
        campoTelefone.value = '';
        formulario.querySelectorAll('.campo-formulario').forEach((grupo) => {
            grupo.classList.remove('campo-invalido');
            grupo.querySelector('.mensagem-erro').textContent = '';
            const controle = grupo.querySelector('input');
            if (controle) controle.removeAttribute('aria-invalid');
        });
        avisoFormulario.hidden = true;
        resumoErros.textContent = '';

        const dataExtenso = new Intl.DateTimeFormat('pt-BR', {
            weekday: 'long', day: 'numeric', month: 'long'
        }).format(data);
        document.querySelector('#titulo-modal').textContent = `${dataExtenso.charAt(0).toLocaleUpperCase('pt-BR')}${dataExtenso.slice(1)}`;

        document.querySelectorAll('[data-estudio]').forEach((botao) => {
            const estudio = botao.dataset.estudio;
            const selecionado = estudio === estudioSelecionado;
            botao.classList.toggle('ativo', selecionado);
            botao.setAttribute('aria-pressed', String(selecionado));
            botao.disabled = obterVagas(dataSelecionada, estudio) === 0;
        });
        atualizarHorarios();
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-aberto');
        document.querySelector('#fechar-modal').focus();
    }

    function fecharModal() {
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-aberto');
        if (elementoAnterior) elementoAnterior.focus();
    }

    function definirErro(campo, texto) {
        const grupo = document.querySelector(`[data-campo="${campo}"]`);
        grupo.classList.add('campo-invalido');
        grupo.querySelector('.mensagem-erro').textContent = texto;
        const controle = grupo.querySelector('input');
        if (controle) controle.setAttribute('aria-invalid', 'true');
    }

    function validarFormulario() {
        const erros = [];
        const nome = campoNome.value.trim();
        const telefone = campoTelefone.value.trim();
        const digitosTelefone = telefone.replace(/\D/g, '');

        formulario.querySelectorAll('.campo-formulario').forEach((grupo) => {
            grupo.classList.remove('campo-invalido');
            grupo.querySelector('.mensagem-erro').textContent = '';
            const controle = grupo.querySelector('input');
            if (controle) controle.removeAttribute('aria-invalid');
        });

        if (!nome) {
            definirErro('nome', 'Informe o nome do aluno.');
            erros.push('preencha o nome');
        }
        if (!telefone) {
            definirErro('telefone', 'Informe um telefone para contato.');
            erros.push('preencha o telefone');
        } else if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
            definirErro('telefone', 'Informe um telefone válido com DDD.');
            erros.push('revise o telefone');
        }
        if (!estudioSelecionado) {
            definirErro('estudio', 'Escolha um estúdio para continuar.');
            erros.push('escolha um estúdio');
        }
        if (!horarioSelecionado) {
            definirErro('horario', 'Escolha um horário para continuar.');
            erros.push('escolha um horário');
        }

        avisoFormulario.hidden = erros.length === 0;
        resumoErros.textContent = erros.length ? `${erros.join(', ')}.` : '';
        return erros.length === 0;
    }

    filtroBotoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            filtroAtual = botao.dataset.filtro;
            filtroBotoes.forEach((opcao) => {
                const selecionado = opcao === botao;
                opcao.classList.toggle('ativo', selecionado);
                opcao.setAttribute('aria-pressed', String(selecionado));
            });
            renderizarCalendario();
            document.querySelector('#calendario-anuncio').textContent = `Disponibilidade filtrada por ${filtroAtual}.`;
        });
    });

    document.querySelector('#mes-anterior').addEventListener('click', () => {
        mesVisivel = new Date(mesVisivel.getFullYear(), mesVisivel.getMonth() - 1, 1);
        renderizarCalendario();
    });

    document.querySelector('#proximo-mes').addEventListener('click', () => {
        mesVisivel = new Date(mesVisivel.getFullYear(), mesVisivel.getMonth() + 1, 1);
        renderizarCalendario();
    });

    calendario.addEventListener('click', (evento) => {
        const botao = evento.target.closest('button[data-data]');
        if (!botao || botao.disabled) return;
        const [ano, mes, dia] = botao.dataset.data.split('-').map(Number);
        abrirModal(new Date(ano, mes - 1, dia), botao);
    });

    document.querySelectorAll('[data-estudio]').forEach((botao) => {
        botao.addEventListener('click', () => {
            estudioSelecionado = botao.dataset.estudio;
            document.querySelectorAll('[data-estudio]').forEach((opcao) => {
                const selecionado = opcao === botao;
                opcao.classList.toggle('ativo', selecionado);
                opcao.setAttribute('aria-pressed', String(selecionado));
            });
            limparErro('estudio');
            atualizarHorarios();
        });
    });

    opcoesHorario.addEventListener('click', (evento) => {
        const botao = evento.target.closest('button[data-horario]');
        if (!botao || botao.disabled) return;
        horarioSelecionado = botao.dataset.horario;
        opcoesHorario.querySelectorAll('[data-horario]').forEach((opcao) => {
            const selecionado = opcao === botao;
            opcao.classList.toggle('ativo', selecionado);
            opcao.setAttribute('aria-pressed', String(selecionado));
            opcao.querySelector('span').textContent = selecionado ? 'selecionado' : 'livre';
        });
        limparErro('horario');
    });

    campoNome.addEventListener('input', () => {
        if (campoNome.value.trim()) limparErro('nome');
    });
    campoTelefone.addEventListener('input', () => {
        if (campoTelefone.value.trim()) limparErro('telefone');
    });

    document.querySelector('#fechar-modal').addEventListener('click', fecharModal);
    document.querySelector('#cancelar-agendamento').addEventListener('click', fecharModal);
    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) fecharModal();
    });
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && !modal.hidden) fecharModal();
    });

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        if (!validarFormulario()) return;

        const [ano, mes, dia] = [
            dataSelecionada.getFullYear(),
            String(dataSelecionada.getMonth() + 1).padStart(2, '0'),
            String(dataSelecionada.getDate()).padStart(2, '0')
        ];
        const parametros = new URLSearchParams({
            nome: campoNome.value.trim(),
            telefone: campoTelefone.value.trim(),
            estudio: estudioSelecionado,
            dia: `${ano}-${mes}-${dia}`,
            horario: horarioSelecionado
        });
        window.location.href = `confirmado.html?${parametros.toString()}`;
    });

    renderizarCalendario();
})();