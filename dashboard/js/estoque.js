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

const produtosPreCadastrados = [
	{ item: "Jeans", cor: "Preto", quantidade: 1000, medida: "Metros" },
	{ item: "Zíper", cor: "Prata", quantidade: 1000, medida: "Unidades" },
	{ item: "Malha", cor: "Rosa", quantidade: 1000, medida: "Metros" },
	// Adicione outros produtos aqui
];
function preencherTabelaProdutosPreCadastrados() {
	const tabela = document.getElementById("tabela-estoque");
	const tbody = tabela.querySelector("tbody");

	produtosPreCadastrados.forEach(produto => {
		const novaLinha = document.createElement("tr");
		novaLinha.innerHTML = `
			<td>${produto.item}</td>
			<td>${produto.cor}</td>
			<td>${produto.quantidade}</td>
			<td>${produto.medida}</td>
		`;

		novaLinha.addEventListener("dblclick", function() {
		alert(`Você Clicou duas Vezes em ${produto.item}`);
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
	novaLinha.innerHTML = `
		<td>${item}</td>
		<td>${cor}</td>
		<td>${quantidade}</td>
		<td>${medida}</td>
	`;

	novaLinha.addEventListener("dblclick", function() {
		alert(`Você Clicou duas Vezes em ${item}`);
	});

	// Adicione a nova linha à tabela
	tbody.appendChild(novaLinha);

	// Limpe os campos do formulário
	document.getElementById("item").value = "";
	document.getElementById("cor").value = "#ffffff";
	document.getElementById("quant").value = "";
	const radios = document.querySelectorAll('input[name="radio"]');
	radios.forEach(radio => {
		radio.checked = false;
	});
}

function adicionarProdutoPedido() {
	// Obtenha os valores do formulário
	const fornecedor = document.getElementById("fornecedor").value;
	const material = document.getElementById("material").value;
	const quantidade = document.getElementById("quantidade").value;
	const cor = document.getElementById("cor").value;

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
	document.getElementById("material").value = "";
	document.getElementById("quantidade").value = "";
	document.getElementById("pedido").value = "";
	document.getElementById("cor").value = "#ffffff";
}

function emConstrucao(){
	window.alert("Função em Construção! - Volte mais tarde")
}

function executar-button(){
	var quantNecessaria = document.getElementById("quant-necessaria");
    var quantDisponivel = document.getElementById("quant-disponivel");

    // Obter o botão "EXECUTAR"
    var executarButton = document.getElementById("executar-button");

    // Verificar a condição e aplicar a classe apropriada
    if (parseInt(quantNecessaria.textContent) <= parseInt(quantDisponivel.textContent)) {
        executarButton.classList.add("verde"); // Adicione a classe verde
    } else {
        executarButton.classList.add("vermelho"); // Adicione a classe vermelha
    }
}