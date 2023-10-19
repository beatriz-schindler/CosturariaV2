	// Função para mostrar o painel de Pagamentos
	function mostrarPainelPagamentos() {
	    document.getElementById("painel-pagamentos").style.display = "block";
	    document.getElementById("painel-recebimentos").style.display = "none";

	    // Adicionar a classe "active" ao botão Pagamentos e remover de outros botões
	    document.getElementById("btn-pagamentos").classList.add("active");
	    document.getElementById("btn-recebimentos").classList.remove("active");
	}

	// Função para mostrar o painel de Recebimentos
	function mostrarPainelRecebimentos() {
	    document.getElementById("painel-pagamentos").style.display = "none";
	    document.getElementById("painel-recebimentos").style.display = "block";

	    // Adicionar a classe "active" ao botão Recebimentos e remover de outros botões
	    document.getElementById("btn-pagamentos").classList.remove("active");
	    document.getElementById("btn-recebimentos").classList.add("active");
	}

	// Função para mostrar o painel de Relatórios
	function mostrarPainelRelatorios() {
	    document.getElementById("painel-pagamentos").style.display = "none";
	    document.getElementById("painel-recebimentos").style.display = "none";

	    // Adicionar a classe "active" ao botão Relatórios e remover de outros botões
	    document.getElementById("btn-pagamentos").classList.remove("active");
	    document.getElementById("btn-recebimentos").classList.remove("active");
	}

	// Adicionar eventos de clique aos botões
	document.getElementById("btn-pagamentos").addEventListener("click", mostrarPainelPagamentos);
	document.getElementById("btn-recebimentos").addEventListener("click", mostrarPainelRecebimentos);

	// Exibir o painel de Pagamentos ao carregar a página
	window.addEventListener("load", mostrarPainelPagamentos);

	// Função de Mensagem "emConstrucao"
	function emConstrucao() {
	    alert('Essa função está em construção!');
	}
	

	// Função para aplicar a máscara de valor no campo
	function formatarCampoValor(campoId) {
	    var input = document.getElementById(campoId);
	    if (input) {
	        var valor = input.value.replace(/\D/g, ""); // Remove tudo que não é dígito

	        // Formate o valor com vírgula e ponto
	        valor = (valor / 100).toFixed(2).replace(".", ",");

	        // Adicione o "R$" antes do valor
	        input.value = "R$ " + valor;
	    }
	}

	// ----- Linha Selecionada em AMARELO Pagamentos -----------------------------

	// Variável para armazenar a linha clicada atualmente
	var linhaClicadaPagto = null;

	// Função para destacar a linha clicada e desfazer o destaque das outras
	function highlightRowPagto(row) {
	    // Se uma linha já estiver destacada, remova o destaque dela
	    if (linhaClicadaPagto !== null) {
	        linhaClicadaPagto.style.backgroundColor = '';
	    }

	    // Verifica se a linha clicada não é a mesma que a anterior
	    if (row !== linhaClicadaPagto) {
	        linhaClicadaPagto = row; // Armazena a nova linha clicada
	        row.style.backgroundColor = 'yellow'; // Define a cor de fundo como amarela
	    } else {
	        linhaClicadaPagto = null; // Remove o destaque se a mesma linha for clicada novamente
	    }
	}


	// ----- PAGAMENTOS -----------------------------------------------

	function editarLinhaPagto() {
	    if (linhaClicadaPagto) {
			
			
			
			const cells = linhaClicadaPagto.getElementsByTagName('td');
	        document.getElementById("position-pagto-edit").value = cells[0].textContent;			
	        document.getElementById("forne-pagto-edit").value = cells[1].textContent;
	        document.getElementById("valor-pagto-edit").value = cells[2].textContent;
	        document.getElementById("data-pagto-edit").value = cells[3].textContent;

	        document.getElementById("pagto-pagto-edit").value = cells[4].textContent;
	        document.getElementById("status-pagto-edit").value = cells[5].textContent;
			
			
			
	        abrirModalPagtoEdit();
	    } else {
	        alert('Nenhuma linha selecionada. Selecione uma linha para editar.');
	    }
	}

	function salvarEdicaoPagto() {
	    if (linhaClicadaPagto) {
	        // Captura os valores dos campos de edição
	        var positionEdit = document.getElementById("position-pagto-edit").value;
	        var clienteEdit = document.getElementById("forne-pagto-edit").value;
	        var valorEdit = document.getElementById("valor-pagto-edit").value;
	        var dataEdit = document.getElementById("data-pagto-edit").value;
	        var pagtoEdit = document.getElementById("pagto-pagto-edit").value;
	        var statusEdit = document.getElementById("status-pagto-edit").value;

	        // Verifica se algum dos campos de edição está vazio
	        if (
	            positionEdit === "" ||
	            forneEdit === "" ||
	            valorEdit === "" ||
	            dataEdit === "" ||
	            pagtoEdit === "" ||
	            statusEdit === ""
	        ) {
	            alert("Preencha todos os campos de edição antes de salvar.");
	        } else {

	            // Reorganize a data no formato "dia-mes-ano"
	            var dataParts = dataEdit.split('-');
	            var dataFormatada = dataParts[2] + '-' + dataParts[1] + '-' + dataParts[0];

	            // Atualiza os valores da linha clicada com os valores dos campos de edição
	            const cells = linhaClicadaPagto.getElementsByTagName('td');
	            cells[0].textContent = positionEdit;
	            cells[1].textContent = forneEdit;
	            cells[2].textContent = valorEdit;
	            cells[3].textContent = dataFormatada;
	            cells[4].textContent = pagtoEdit;
	            cells[5].textContent = statusEdit;

	            // Fecha o modal de edição
	            fecharModalPagtoEdit();
	        }
	    } else {
	        alert('Nenhuma linha selecionada. Selecione uma linha para editar. 123456');
	    }
	}
	
	var contadorPositionPagto = 1;
	
	function cadastrarPagto() {
	    // Captura os valores dos campos do modal
	    var position = contadorPositionPagto;
	    var forne = document.getElementById("forne-pagto").value;
	    var valor = document.getElementById("valor-pagto").value;
	    var data = document.getElementById("data-pagto").value;
	    var forma = document.getElementById("forma-pagto").value;
	    var status = document.getElementById("status-pagto").value;
		
		// Verifica se todos os campos estão preenchidos
	    if (forne.trim() === '' || valor.trim() === '' || data.trim() === '') {
	        alert("Por favor, preencha todos os campos obrigatórios.");
	        return;
	    }

	    // Incrementa o contador para o próximo valor de position
	    contadorPositionRecto++;

	    // Reorganize a data no formato "dia-mes-ano"
	    var dataParts = data.split('-');
	    var dataFormatada = dataParts[2] + '-' + dataParts[1] + '-' + dataParts[0];

	    // Cria um objeto com os valores
	    var novoRegistro = {
	        position: position,
	        forne: forne,
	        valor: valor,
	        data: dataFormatada,
	        forma: forma,
	        status: status
	    };

	    // Encontra a tabela onde você deseja adicionar a nova linha
	    var table = document.getElementById("tabela-pagamentos");

	    // Cria uma nova linha
	    var newRow = table.insertRow();
	    newRow.setAttribute("onclick", "highlightRow(this)");

	    // Adiciona as células na nova linha
	    var cell1 = newRow.insertCell(0);
	    var cell2 = newRow.insertCell(1);
	    var cell3 = newRow.insertCell(2);
	    var cell4 = newRow.insertCell(3);
	    var cell5 = newRow.insertCell(4);
	    var cell6 = newRow.insertCell(5);

	    // Define o conteúdo das células com os valores do objeto
	    cell1.innerHTML = novoRegistro.position;
	    cell2.innerHTML = novoRegistro.forne;
	    cell3.innerHTML = novoRegistro.valor;
	    cell4.innerHTML = novoRegistro.data;
	    cell5.innerHTML = novoRegistro.forma;
	    cell6.innerHTML = novoRegistro.status;

	    // Limpa os campos do modal
	    document.getElementById("position-pagto").value = "";
	    document.getElementById("forne-pagto").value = "";
	    document.getElementById("valor-pagto").value = "";
	    document.getElementById("data-pagto").value = "";
	    document.getElementById("forma-pagto").value = "pix";
	    document.getElementById("status-pagto").value = "aberto";

	    // Feche o modal após adicionar a linha
	    fecharModalPagto();
	}
	
	// -------------- Abrir e Fechar Inserção de Pagamentos ----------

	// Função para abrir o modal Pagamentos
	function abrirModalPagto() {
	    var modal = document.getElementById('myModalPagto');
	    modal.style.display = 'block';
	}

	// Função para fechar o modal Pagamentos
	function fecharModalPagto() {
	    var modal = document.getElementById('myModalPagto');
	    modal.style.display = 'none';
	}
	
	// -------------- Abrir e Fechar Inserção de Recebimentos ----------
	
	// Função para abrir o modal Pagamentos
	function abrirModalPagtoEdit() {
	    var modal = document.getElementById('myModalPagtoEdit');
	    modal.style.display = 'block';
	}

	// Função para fechar o modal Pagamentos
	function fecharModalPagtoEdit() {
	    var modal = document.getElementById('myModalPagtoEdit');
	    modal.style.display = 'none';
	}

	
// --------- RECEBIMENTOS ----------------------------------------------
	
	// ----- Linha Selecionada em AMARELO -----------------------------

	// Variável para armazenar a linha clicada atualmente
	var linhaClicadaRecto = null;

	// Função para destacar a linha clicada e desfazer o destaque das outras
	function highlightRowRecto(row) {
	    // Se uma linha já estiver destacada, remova o destaque dela
	    if (linhaClicadaRecto !== null) {
	        linhaClicadaRecto.style.backgroundColor = '';
	    }

	    // Verifica se a linha clicada não é a mesma que a anterior
	    if (row !== linhaClicadaRecto) {
	        linhaClicadaRecto = row; // Armazena a nova linha clicada
	        row.style.backgroundColor = 'yellow'; // Define a cor de fundo como amarela
	    } else {
	        linhaClicadaRecto = null; // Remove o destaque se a mesma linha for clicada novamente
	    }
	}
	
	// Função de Mensagem "emConstrucao"
	function imprimirFatura() {
		alert('Por favor, selecione uma entrada!');

	}
	
	function editarLinhaRecto() {
	    if (linhaClicadaRecto) {
	        const cells = linhaClicadaRecto.getElementsByTagName('td');
	        document.getElementById("position-recto-edit").value = cells[0].textContent;
	        document.getElementById("cliente-recto-edit").value = cells[1].textContent;
	        document.getElementById("valor-recto-edit").value = cells[2].textContent;
	        document.getElementById("data-recto-edit").value = cells[3].textContent;
	        document.getElementById("pagto-recto-edit").value = cells[4].textContent;
	        document.getElementById("status-recto-edit").value = cells[5].textContent;

	        abrirModalRectoEdit();
	    } else {
	        alert('Nenhuma linha selecionada. Selecione uma linha para editar.');
	    }
	}

	function salvarEdicaoRecto() {
	    if (linhaClicadaRecto) {
	        // Captura os valores dos campos de edição
	        var positionEdit = document.getElementById("position-recto-edit").value;
	        var clienteEdit = document.getElementById("cliente-recto-edit").value;
	        var valorEdit = document.getElementById("valor-recto-edit").value;
	        var dataEdit = document.getElementById("data-recto-edit").value;
	        var pagtoEdit = document.getElementById("pagto-recto-edit").value;
	        var statusEdit = document.getElementById("status-recto-edit").value;

	        // Verifica se algum dos campos de edição está vazio
	        if (
	            positionEdit === "" ||
	            clienteEdit === "" ||
	            valorEdit === "" ||
	            dataEdit === "" ||
	            pagtoEdit === "" ||
	            statusEdit === ""
	        ) {
	            alert("Preencha todos os campos de edição antes de salvar.");
	        } else {

	            // Reorganize a data no formato "dia-mes-ano"
	            var dataParts = dataEdit.split('-');
	            var dataFormatada = dataParts[2] + '-' + dataParts[1] + '-' + dataParts[0];

	            // Atualiza os valores da linha clicada com os valores dos campos de edição
	            const cells = linhaClicadaRecto.getElementsByTagName('td');
	            cells[0].textContent = positionEdit;
	            cells[1].textContent = clienteEdit;
	            cells[2].textContent = valorEdit;
	            cells[3].textContent = dataFormatada;
	            cells[4].textContent = pagtoEdit;
	            cells[5].textContent = statusEdit;

	            // Fecha o modal de edição
	            fecharModalRectoEdit();
	        }
	    } else {
	        alert('Nenhuma linha selecionada. Selecione uma linha para editar.');
	    }
	}

	// Defina um contador global para rastrear o próximo valor de position
	var contadorPositionRecto = 1;

	function cadastrarRecto() {
	    // Captura os valores dos campos do modal
	    var position = contadorPositionRecto;
	    var cliente = document.getElementById("cliente-recto").value;
	    var valor = document.getElementById("valor-recto").value;
	    var data = document.getElementById("data-recto").value;
	    var forma = document.getElementById("pagto-recto").value;
	    var status = document.getElementById("status-recto").value;

	    // Verifica se todos os campos estão preenchidos
	    if (cliente.trim() === '' || valor.trim() === '' || data.trim() === '') {
	        alert("Por favor, preencha todos os campos obrigatórios.");
	        return;
	    }

	    // Incrementa o contador para o próximo valor de position
	    contadorPositionRecto++;

	    // Reorganize a data no formato "dia-mes-ano"
	    var dataParts = data.split('-');
	    var dataFormatada = dataParts[2] + '-' + dataParts[1] + '-' + dataParts[0];

	    // Cria um objeto com os valores
	    var novoRegistro = {
	        position: position,
	        cliente: cliente,
	        valor: valor,
	        data: dataFormatada,
	        forma: forma,
	        status: status
	    };

	    // Encontra a tabela onde você deseja adicionar a nova linha
	    var table = document.getElementById("tabela-Racebimentos");

	    // Cria uma nova linha
	    var newRow = table.insertRow();
	    newRow.setAttribute("onclick", "highlightRowRecto(this)");

	    // Adiciona as células na nova linha
	    var cell1 = newRow.insertCell(0);
	    var cell2 = newRow.insertCell(1);
	    var cell3 = newRow.insertCell(2);
	    var cell4 = newRow.insertCell(3);
	    var cell5 = newRow.insertCell(4);
	    var cell6 = newRow.insertCell(5);

	    // Define o conteúdo das células com os valores do objeto
	    cell1.innerHTML = novoRegistro.position;
	    cell2.innerHTML = novoRegistro.cliente;
	    cell3.innerHTML = novoRegistro.valor;
	    cell4.innerHTML = novoRegistro.data;
	    cell5.innerHTML = novoRegistro.forma;
	    cell6.innerHTML = novoRegistro.status;

	    // Limpa os campos do modal
	    document.getElementById("cliente-recto").value = "";
	    document.getElementById("valor-recto").value = "";
	    document.getElementById("data-recto").value = "";
	    document.getElementById("pagto-recto").value = "pix";
	    document.getElementById("status-recto").value = "aberto";

	    // Feche o modal após adicionar a linha
	    fecharModalRecto();
	}


	// -------------- Abrir e Fechar Inserção de Recebimentos ----------

	// Função para abrir o modal
	function abrirModalRecto() {
	    var modal = document.getElementById('myModalRecto');
	    modal.style.display = 'block';
	}

	// Função para fechar o modal
	function fecharModalRecto() {
	    var modal = document.getElementById('myModalRecto');
	    modal.style.display = 'none';
	}

	// -------------- Abrir e Fechar Edição de Recebimentos --------------------

	// Função para abrir edição o modal
	function abrirModalRectoEdit() {
	    var modal = document.getElementById('myModalRectoEdit');
	    modal.style.display = 'block';
	}

	// Função para fechar o modal
	function fecharModalRectoEdit() {
	    var modal = document.getElementById('myModalRectoEdit');
	    modal.style.display = 'none';
	}