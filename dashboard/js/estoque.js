// Função para mostrar o painel de Cadastros
function mostrarPainelCadastroEstoque() {
    document.getElementById("painel-cadastro-estoque").style.display = "block";
    document.getElementById("painel-pedidos-estoque").style.display = "none";
	document.getElementById("painel-listagem-pedidos").style.display = "none";

    // Adicionar a classe "active" ao botão Cadastros e remover de outros botões
    document.querySelector(".button-cadastro-estoque").classList.add("active");
    document.querySelector(".button-pedidos-estoque").classList.remove("active");
	document.querySelector(".button-listagem-pedidos").classList.remove("active");
}

// Função para mostrar o painel de Pedidos
function mostrarPainelPedidosEstoque() {
    document.getElementById("painel-cadastro-estoque").style.display = "none";
    document.getElementById("painel-pedidos-estoque").style.display = "block";
	document.getElementById("painel-listagem-pedidos").style.display = "none";

    // Adicionar a classe "active" ao botão Pedidos e remover de outros botões
    document.querySelector(".button-cadastro-estoque").classList.remove("active");
    document.querySelector(".button-pedidos-estoque").classList.add("active");
	document.querySelector(".button-listagem-pedidos").classList.remove("active");
}

function mostrarPainelListagemPedidosEstoque() {
    document.getElementById("painel-cadastro-estoque").style.display = "none";
    document.getElementById("painel-pedidos-estoque").style.display = "none";
	document.getElementById("painel-listagem-pedidos").style.display = "block";

    // Adicionar a classe "active" ao botão Pedidos e remover de outros botões
    document.querySelector(".button-cadastro-estoque").classList.remove("active");
    document.querySelector(".button-pedidos-estoque").classList.remove("active");
	document.querySelector(".button-listagem-pedidos").classList.add("active");
}



// Adicionar eventos de clique aos botões
document.querySelector(".button-cadastro-estoque").addEventListener("click", mostrarPainelCadastroEstoque);
document.querySelector(".button-pedidos-estoque").addEventListener("click", mostrarPainelPedidosEstoque);
document.querySelector(".button-listagem-pedidos").addEventListener("click", mostrarPainelListagemPedidosEstoque);

// Exibir o painel de Cadastros ao carregar a página
window.addEventListener("load", mostrarPainelCadastroEstoque);


var linhaClicada = null;

// Função para destacar a linha clicada e desfazer o destaque das outras
function highlightRow(row) {
	// Se uma linha já estiver destacada, remova o destaque dela
	if (linhaClicada !== null) {
		linhaClicada.style.backgroundColor = '';
	}

	// Verifica se a linha clicada não é a mesma que a anterior
	if (row !== linhaClicada) {
		linhaClicada = row; // Armazena a nova linha clicada
		row.style.backgroundColor = 'yellow'; // Define a cor de fundo como amarela
	} else {
		linhaClicada = null; // Remove o destaque se a mesma linha for clicada novamente
	}

	// Remova todos os ouvintes de eventos dos botões
    document.getElementById('BtnEditProd').removeEventListener("click", abrirModal);
    document.getElementById('BtnEditPed').removeEventListener("click", abrirModalPedido);

	document.getElementById('BtnEditProd').addEventListener("click", function() {
		abrirModal(linhaClicada);
	});
	
}

const produtosPreCadastrados = [
	{ item: "Jeans", cor: "Preto", quantidade: 1000, medida: "Metros" },
	{ item: "Zíper", cor: "Prata", quantidade: 1000, medida: "Unidades" },
	{ item: "Malha", cor: "Rosa", quantidade: 1000, medida: "Metros" },
	// Adicione outros produtos aqui
];

const pedidosPreCadastrados = [
	{ pedido: 25896321, fornecedor: "Doidão", material: "Jeans", cor: "Dourado", quantidade: 258},
	// Adicione outros ´pedidos aqui
];

function abrirModal(row) {
    // Preencha os campos do modal com os dados da linha clicada
    document.getElementById("item-modal").value = row.cells[0].textContent;
    document.getElementById("cor-modal").value = row.cells[1].textContent;
    document.getElementById("quant-modal").value = row.cells[2].textContent;

    // Selecionar a opção correta no <select>
    var medidaSelect = document.getElementById("medida-modal");
    var medidaValue = row.cells[3].textContent;
    for (var i = 0; i < medidaSelect.options.length; i++) {
        if (medidaSelect.options[i].value === medidaValue) {
            medidaSelect.selectedIndex = i;
            break;
        }
    }

    // Exiba o modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Recupere o valor selecionado no <select> e exiba-o na <div> desejada
    var selectedValue = document.getElementById("selectedValue");
    selectedValue.textContent = medidaSelect.options[medidaSelect.selectedIndex].text;
}

function abrirModalPedido(row) {

	NPedidoModal.innerHTML =`
		<h1> #${row.cells[0].textContent} </h1>
		<h1>  |  ${row.cells[1].textContent}</h1>
	`;

	// Preencha a tabela do modal
    var tabelaModal = document.getElementById("tabela-modal-pedidos-body");
    tabelaModal.innerHTML = ""; // Limpe o conteúdo anterior da tabela

    // Dados que você deseja adicionar à tabela (substitua por seus próprios dados)
    var dados = [
        [row.cells[2].textContent,row.cells[3].textContent, row.cells[4].textContent],
    
    ];

    // Itere sobre os dados e crie linhas na tabela
    dados.forEach(function (item) {
        var row = tabelaModal.insertRow();
        for (var i = 0; i < 3; i++) { // 3 colunas
            var cell = row.insertCell(i);
            cell.innerHTML = item[i];
        }
    });

    // Exiba o modal
    var modal = document.getElementById("myModalPed");
    modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
	var modal = document.getElementById("myModal");
	var modalPed = document.getElementById("myModalPed")
	modal.style.display = "none";
	modalPed.style.display = "none";
}

// Evento de clique em uma linha da tabela
var tabelaPed = document.getElementById("tabela-pedidos");
var linhasPed = tabelaPed.getElementsByTagName("tr");
for (var i = 0; i < linhasPed.length; i++) {
	linhasPed[i].addEventListener("click", function () {
		abrirModalPedido(this);
	});
}

// Evento de clique no botão de fechar do modal
var botaoFechar = document.getElementsByClassName("close")[0];
botaoFechar.addEventListener("click", function () {
	fecharModal();
});


function preencherTabelaProdutosPreCadastrados() {
	const tabela = document.getElementById("tabela-estoque");
	const tbody = tabela.querySelector("tbody");

	produtosPreCadastrados.forEach(produto => {
		const novaLinha = document.createElement("tr");
		novaLinha.setAttribute("onclick", "highlightRow(this)");
		novaLinha.innerHTML = `
			<td>${produto.item}</td>
			<td>${produto.cor}</td>
			<td>${produto.quantidade}</td>
			<td>${produto.medida}</td>
		`;
		
		novaLinha.addEventListener("dblclick", function() {
		abrirModal(this);	
	});

		tbody.appendChild(novaLinha);
	});
}

function preencherTabelaPedidosPreCadastrados() {
	const tabela = document.getElementById("tabela-pedidos");
	const tbody = tabela.querySelector("tbody");

	pedidosPreCadastrados.forEach(pedido => {
		const novaLinha = document.createElement("tr");
		novaLinha.setAttribute("onclick", "highlightRow(this)");
		novaLinha.innerHTML = `
			<td>${pedido.pedido}</td>
			<td>${pedido.fornecedor}</td>
			<td>${pedido.material}</td>
			<td>${pedido.cor}</td>
			<td>${pedido.quantidade}</td>
		`;
		
		novaLinha.addEventListener("dblclick", function() {
		abrirModalPedido(this);	
	});

		tbody.appendChild(novaLinha);
	});
}


// Chame a função para preencher a tabela quando a página carregar
window.addEventListener("load", preencherTabelaProdutosPreCadastrados);
window.addEventListener("load", preencherTabelaPedidosPreCadastrados);

function adicionarProduto() {
	// Obtenha os valores do formulário
	const item = document.getElementById("item").value;
	const cor = document.getElementById("cor").value;
	const quantidade = document.getElementById("quant").value;
	const medida = document.querySelector('input[name="radio"]:checked').value;

	// Crie uma nova linha na tabela
	const tabela = document.getElementById("tabela-estoque");
	const tbody = tabela.querySelector("tbody");

	const novaLinha = document.createElement("tr");
	novaLinha.setAttribute("onclick", "highlightRow(this)");
	novaLinha.innerHTML = `
		<td>${item}</td>
		<td>${cor}</td>
		<td>${quantidade}</td>
		<td>${medida}</td>
	`;

	novaLinha.addEventListener("dblclick", function() {
		abrirModal(this);
	});

	// Adicione a nova linha à tabela
	tbody.appendChild(novaLinha);

	// Limpe os campos do formulário
	document.getElementById("item").value = "";
	document.getElementById("cor").value = "";
	document.getElementById("quant").value = "";
	const radios = document.querySelectorAll('input[name="radio"]');
	radios.forEach(radio => {
		radio.checked = false;
	});
}

function gerarValorAleatorio() {
	return Math.floor(Math.random() * 1000); // Altere os limites conforme necessário
}

var campoAleatorio = document.getElementById("numero-pedido");
	campoAleatorio.value = gerarValorAleatorio();

function adicionarProdutoPedido() {
	// Obtenha os valores do formulário
	const pedido =  document.getElementById("numero-pedido").value;
	const fornecedor = document.getElementById("fornecedor").value;
	const material = document.getElementById("material-pedido").value;
	const quantidade = document.getElementById("quantidade-pedido").value;
	const cor = document.getElementById("cor-pedido").value;

	// Crie uma nova linha na tabela
	const tabela = document.getElementById("tabela-pedidos");
	const tbody = tabela.querySelector("tbody");
	const novaLinha = document.createElement("tr");
	novaLinha.setAttribute("onclick", "highlightRow(this)");
	novaLinha.innerHTML = `
		<td>${pedido}</td>
		<td>${fornecedor}</td>
		<td>${material}</td>
		<td>${cor}</td>
		<td>${quantidade}</td>
	`;

	novaLinha.addEventListener("dblclick", function() {
		abrirModalPedido(this);
	});

	// Adicione a nova linha à tabela
	tbody.appendChild(novaLinha);

	// Limpe os campos do formulário
	document.getElementById("fornecedor").value = "";
	document.getElementById("material-pedido").value = "";
	document.getElementById("quantidade-pedido").value = "";
	campoAleatorio.value = gerarValorAleatorio();
	document.getElementById("cor-pedido").value = "";

	alert("Pedido realizado com sucesso!");
}

// Obtém elementos HTML do DOM
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// Função para abrir o modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Função para fechar o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

function realizarPesquisa() {
    // Obtenha os valores dos campos de entrada
    var fornecedor = document.getElementById("fornecedor-listagem").value.toLowerCase();
    var pedido = document.getElementById("pedido-listagem").value;

    var tabelaOrigem = document.getElementById("tabela-estoque");
    var tabelaDestino = document.getElementById("tabela-listagem");
    var rowsOrigem = tabelaOrigem.getElementsByTagName("tr");
    var rowsDestino = tabelaDestino.getElementsByTagName("tr");

    // Limpe a tabela de destino
    while (rowsDestino.length > 1) {
        tabelaDestino.deleteRow(1);
    }

    // Itere pelas linhas da tabela de origem e verifique se há correspondência com a pesquisa
    for (var i = 1; i < rowsOrigem.length; i++) {
        var cells = rowsOrigem[i].getElementsByTagName("td");
        var cellFornecedor = cells[0].textContent.toLowerCase();
        var cellPedido = cells[1].textContent;

        if (cellFornecedor.includes(fornecedor) && (pedido === "" || cellPedido === pedido.toString())) {
            // Se houver correspondência, adicione a linha à tabela de destino
            var newRow = tabelaDestino.insertRow(-1);
            for (var j = 0; j < cells.length; j++) {
                var newCell = newRow.insertCell(j);
                newCell.innerHTML = cells[j].innerHTML;
            }
        }
    }
}




// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function emConstrucao(){
	window.alert("Função em Construção! - Volte mais tarde")
}
