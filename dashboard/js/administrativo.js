// Função para mostrar o painel de Cadastros
function mostrarPainelCadastros() {
    document.getElementById("painel-cadastros").style.display = "block";
    document.getElementById("painel-pedidos-adm").style.display = "none";

    // Adicionar a classe "active" ao botão Cadastros e remover de outros botões
    document.querySelector(".button-cadastros").classList.add("active");
    document.querySelector(".button-pedidos").classList.remove("active");
}

// Função para mostrar o painel de Tabelas
function mostrarPainelPedidos() {
    document.getElementById("painel-cadastros").style.display = "none";
    document.getElementById("painel-pedidos-adm").style.display = "block";

    // Adicionar a classe "active" ao botão Tabelas e remover de outros botões
    document.querySelector(".button-cadastros").classList.remove("active");
    document.querySelector(".button-pedidos").classList.add("active");
}

// Adicionar eventos de clique aos botões
document.querySelector(".button-cadastros").addEventListener("click", mostrarPainelCadastros);
document.querySelector(".button-pedidos").addEventListener("click", mostrarPainelPedidos);

// Exibir o painel de Cadastros ao carregar a página
window.addEventListener("load", mostrarPainelCadastros);

function emConstrucao(){
	window.alert("Função em Construção! - Volte mais tarde")
}