// Função para mostrar o painel de Cadastros
function mostrarPainelCadastroEstoque() {
    document.getElementById("painel-cadastro-estoque").style.display = "block";
    document.getElementById("painel-pedidos-estoque").style.display = "none";

    // Adicionar a classe "active" ao botão Cadastros e remover de outros botões
    document.querySelector(".button-cadastro-estoque").classList.add("active");
    document.querySelector(".button-pedidos-estoque").classList.remove("active");
}

// Função para mostrar o painel de Pedidos
function mostrarPainelPedidosEstoque() {
    document.getElementById("painel-cadastro-estoque").style.display = "none";
    document.getElementById("painel-pedidos-estoque").style.display = "block";

    // Adicionar a classe "active" ao botão Pedidos e remover de outros botões
    document.querySelector(".button-cadastro-estoque").classList.remove("active");
    document.querySelector(".button-pedidos-estoque").classList.add("active");
}



// Adicionar eventos de clique aos botões
document.querySelector(".button-cadastro-estoque").addEventListener("click", mostrarPainelCadastroEstoque);
document.querySelector(".button-pedidos-estoque").addEventListener("click", mostrarPainelPedidosEstoque);

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
}

const produtosPreCadastrados = [
	{ item: "Jeans", cor: "Preto", quantidade: 1000, medida: "Metros" },
	{ item: "Zíper", cor: "Prata", quantidade: 1000, medida: "Unidades" },
	{ item: "Malha", cor: "Rosa", quantidade: 1000, medida: "Metros" },
	// Adicione outros produtos aqui
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

// Função para fechar o modal
function fecharModal() {
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}

// Evento de clique em uma linha da tabela
var tabela = document.getElementById("tabela-estoque");
var linhas = tabela.getElementsByTagName("tr");
for (var i = 0; i < linhas.length; i++) {
	linhas[i].addEventListener("click", function () {
		abrirModal(this);
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


// Chame a função para preencher a tabela quando a página carregar
window.addEventListener("load", preencherTabelaProdutosPreCadastrados);

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




// function adicionarCliqueDuplo() {
// 	var linhas = document.querySelectorAll("tbody tr");
// 	linhas.forEach(function(linha) {
// 		linha.addEventListener("dblclick", function() {
// 			armazenarDadosLinha(linha);
// 		});
// 	});
// }

// function armazenarDadosLinha(linha) {
// 	if (linhaSelecionada === linha) {
// 		var cells = linha.cells;
// 		var dadosLinha = {
// 			coluna1: cells[0].textContent,
// 			coluna2: cells[1].textContent,
// 			coluna3: cells[2].textContent
// 			// Adicione mais propriedades para cada coluna, se necessário
// 		};

// 		console.log(dadosLinha);
// 	} else {
// 		linhaSelecionada = linha;
// 	}
// }

function adicionarProdutoPedido() {
	// Obtenha os valores do formulário
	const fornecedor = document.getElementById("fornecedor").value;
	const material = document.getElementById("material-pedido").value;
	const quantidade = document.getElementById("quantidade-pedido").value;
	const cor = document.getElementById("cor-pedido").value;

	// Crie uma nova linha na tabela
	const tabela = document.getElementById("tabela-pedidos");
	const tbody = tabela.querySelector("tbody");

	const novaLinha = document.createElement("tr");
	novaLinha.innerHTML = `
		<td>${fornecedor}</td>
		<td>${material}</td>
		<td>${cor}</td>
		<td>${quantidade}</td>
	`;

	novaLinha.addEventListener("dblclick", function() {
		alert(`Você Clicou duas Vezes em ${item}`);
	});

	// Adicione a nova linha à tabela
	tbody.appendChild(novaLinha);

	// Limpe os campos do formulário
	document.getElementById("fornecedor").value = "";
	document.getElementById("material-pedido").value = "";
	document.getElementById("quantidade-pedido").value = "";
	document.getElementById("pedido").value = "";
	document.getElementById("cor-pedido").value = "";
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

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function emConstrucao(){
	window.alert("Função em Construção! - Volte mais tarde")
}

// function executar-button(){
// 	var quantNecessaria = document.getElementById("quant-necessaria");
//     var quantDisponivel = document.getElementById("quant-disponivel");

//     // Obter o botão "EXECUTAR"
//     var executarButton = document.getElementById("executar-button");

//     // Verificar a condição e aplicar a classe apropriada
//     if (parseInt(quantNecessaria.textContent) <= parseInt(quantDisponivel.textContent)) {
//         executarButton.classList.add("verde"); // Adicione a classe verde
//     } else {
//         executarButton.classList.add("vermelho"); // Adicione a classe vermelha
//     }
// }