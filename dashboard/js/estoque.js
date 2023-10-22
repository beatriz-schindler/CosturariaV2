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

	document.getElementById('BtnEditProd').addEventListener("click", function() {
		abrirModal(linhaClicada);
	});

	// console.log(linhaClicada);
	document.getElementById('BtnEditList').addEventListener("click", function() {
		abrirModalPedido(linhaClicada);
	});
	console.log(linhaClicada);
	
}



const produtosPreCadastrados = [
	{ item: "Jeans", cor: "Preto", quantidade: 1000, medida: "Metros" },
	{ item: "Zíper", cor: "Prata", quantidade: 1000, medida: "Unidades" },
	{ item: "Malha", cor: "Rosa", quantidade: 1000, medida: "Metros" },
	// Adicione outros produtos aqui
];

const pedidosPreCadastrados = [
	{ pedido: 25896321, fornecedor: "Doidão", material: "Jeans", cor: "Dourado", quantidade: 258, medida: "Metros"},
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

	document.getElementById("material-modal-ped").value = row.cells[2].textContent;
    document.getElementById("cor-modal-ped").value = row.cells[3].textContent;
    document.getElementById("quantidade-modal-ped").value = row.cells[4].textContent;

    // Selecionar a opção correta no <select>
    var medidaSelect = document.getElementById("medida-modal-ped");
    var medidaValue = row.cells[5].textContent;
    for (var i = 0; i < medidaSelect.options.length; i++) {
        if (medidaSelect.options[i].value === medidaValue) {
            medidaSelect.selectedIndex = i;
            break;
        }
    }

    // Exiba o modal
    var modal = document.getElementById("myModalPed");
    modal.style.display = "block";

    // Recupere o valor selecionado no <select> e exiba-o na <div> desejada
    var selectedValue = document.getElementById("selectedValuePed");
    selectedValue.textContent = medidaSelect.options[medidaSelect.selectedIndex].text;

}

// Função para fechar o modal
function fecharModal() {
	var modal = document.getElementById("myModal");
	var modalPed = document.getElementById("myModalPed")
	modal.style.display = "none";
	modalPed.style.display = "none";
}

// Evento de clique em uma linha da tabela
var tabelaPed = document.getElementById("tabela-listagem");
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
	const tabela = document.getElementById("tabela-listagem");
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
			<td>${pedido.medida}</td>
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
	return Math.floor(Math.random() * 10000); // Altere os limites conforme necessário
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
	const medida = document.querySelector('input[name="medida"]:checked').value;

	// Crie uma nova linha na tabela
	const tabela = document.getElementById("tabela-listagem");
	const tbody = tabela.querySelector("tbody");
	const novaLinha = document.createElement("tr");
	novaLinha.setAttribute("onclick", "highlightRow(this)");
	novaLinha.innerHTML = `
		<td>${pedido}</td>
		<td>${fornecedor}</td>
		<td>${material}</td>
		<td>${cor}</td>
		<td>${quantidade}</td>
		<td>${medida}</td>
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
	const radios = document.querySelectorAll('input[name="medida"]');
	radios.forEach(radio => {
		radio.checked = false;
	});

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

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function pesquisarEstoque() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("item");
	filter = input.value.toUpperCase();
	table = document.getElementById("tabela-estoque");
	tr = table.getElementsByTagName("tr");
  
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "table-row";
		} else {
		  tr[i].style.display = "none";
		}
	  }
	}
  }
  
  // Limpar o campo de pesquisa e mostrar todos os itens
  function limparPesquisaEstoque() {
	document.getElementById("item").value = "";
	var table = document.getElementById("tabela-estoque");
	var tr = table.getElementsByTagName("tr");
  
	for (var i = 0; i < tr.length; i++) {
	  tr[i].style.display = "";
	}
  }

function pesquisar() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("pedido-listagem");
	filter = input.value.toUpperCase();
	table = document.getElementById("tabela-listagem");
	tr = table.getElementsByTagName("tr");
  
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "table-row";
		} else {
		  tr[i].style.display = "none";
		}
	  }
	}
  }
  
  // Limpar o campo de pesquisa e mostrar todos os itens
  function limparPesquisa() {
	document.getElementById("numero-pedido").value = "";
	var table = document.getElementById("tabela-listagem");
	var tr = table.getElementsByTagName("tr");
  
	for (var i = 0; i < tr.length; i++) {
	  tr[i].style.display = "";
	}
  }
  
// function editarLinhaEstoque() {
// 	if (linhaClicadaPagto) {
		
// 		const cells = linhaClicadaPagto.getElementsByTagName('td');
// 		document.getElementById("item").value = cells[0].textContent;			
// 		document.getElementById("cor").value = cells[1].textContent;
// 		document.getElementById("quant").value = cells[2].textContent;
// 		document.querySelectorAll('input[name="radio"]') = cells[3].textContent;
		
// 		abrirModal();
// 	} else {
// 		alert('Nenhuma linha selecionada. Selecione uma linha para editar. ESSA');
// 	}
// }

function salvarEdicaoEstoque() {
		console.log(linhaClicada);
		// Captura os valores dos campos de edição
		var itemMod = document.getElementById("item-modal").value;
		var quantMod = document.getElementById("quant-modal").value;
		var medidaMod = document.getElementById("medida-modal").value;
		var corMod = document.getElementById("cor-modal").value;

		// Verifica se algum dos campos de edição está vazio
		if (
			itemMod === "" ||
			quantMod === "" ||
			medidaMod === "" ||
			corMod === ""
		) {
			alert("Preencha todos os campos de edição antes de salvar.");
		} else {
			// Atualiza os valores da linha clicada com os valores dos campos de edição
			const cells = linhaClicada.getElementsByTagName('td');
			cells[0].textContent = itemMod;
			cells[1].textContent = corMod;
			cells[2].textContent = quantMod;
			cells[3].textContent = medidaMod;

			// Fecha o modal de edição
			fecharModal();
		}
	}

function salvarEdicaoListagem() {
	console.log(linhaClicada);
	// Captura os valores dos campos de edição
	var material = document.getElementById("material-modal-ped").value;
	var cor = document.getElementById("cor-modal-ped").value;
	var quantidade = document.getElementById("quantidade-modal-ped").value;
	var medida = document.getElementById("medida-modal-ped").value;

	// Verifica se algum dos campos de edição está vazio
	if (
		material === "" ||
		cor === "" ||
		quantidade === "" ||
		medida === ""
	) {
		alert("Preencha todos os campos de edição antes de salvar.");
	} else {
		// Atualiza os valores da linha clicada com os valores dos campos de edição
		const cells = linhaClicada.getElementsByTagName('td');
		cells[2].textContent = material;
		cells[3].textContent = cor;
		cells[4].textContent = quantidade;
		cells[5].textContent = medida;

		// Fecha o modal de edição
		fecharModal();
	}
}



function emConstrucao(){
	window.alert("Função em Construção! - Volte mais tarde")
}
