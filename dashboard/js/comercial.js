// Função para mostrar o painel de Venda
function mostrarPainelVenda() {
    document.getElementById("painel-venda").style.display = "block";
    document.getElementById("painel-pedidos").style.display = "none";
    document.getElementById("painel-produtos").style.display = "none";

    // Adicionar a classe "active" ao botão Venda e remover de outros botões
    document.querySelector(".button-venda").classList.add("active");
    document.querySelector(".button-pedidos").classList.remove("active");
    document.querySelector(".button-produtos").classList.remove("active");
}

// Função para mostrar o painel de Pedidos
function mostrarPainelPedidos() {
    document.getElementById("painel-venda").style.display = "none";
    document.getElementById("painel-pedidos").style.display = "block";
    document.getElementById("painel-produtos").style.display = "none";

    // Adicionar a classe "active" ao botão Pedidos e remover de outros botões
    document.querySelector(".button-venda").classList.remove("active");
    document.querySelector(".button-pedidos").classList.add("active");
    document.querySelector(".button-produtos").classList.remove("active");
}

// Função para mostrar o painel de Produtos
function mostrarPainelProdutos() {
    document.getElementById("painel-venda").style.display = "none";
    document.getElementById("painel-pedidos").style.display = "none";
    document.getElementById("painel-produtos").style.display = "block";

    // Adicionar a classe "active" ao botão Produtos e remover de outros botões
    document.querySelector(".button-venda").classList.remove("active");
    document.querySelector(".button-pedidos").classList.remove("active");
    document.querySelector(".button-produtos").classList.add("active");
}

// Adicionar eventos de clique aos botões
document.querySelector(".button-venda").addEventListener("click", mostrarPainelVenda);
document.querySelector(".button-pedidos").addEventListener("click", mostrarPainelPedidos);
document.querySelector(".button-produtos").addEventListener("click", mostrarPainelProdutos);

// Exibir o painel de Venda ao carregar a página
window.addEventListener("load", mostrarPainelVenda);

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