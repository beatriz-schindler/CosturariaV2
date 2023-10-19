// Função para mostrar o painel de Executando
function mostrarPainelExecutando() {
    document.getElementById("painel-executando").style.display = "block";
    document.getElementById("painel-aguardando").style.display = "none";
    document.getElementById("painel-pedidos").style.display = "none";

    // Adicionar a classe "active" ao botão Executando e remover de outros botões
    document.querySelector(".button-executando").classList.add("active");
    document.querySelector(".button-aguardando").classList.remove("active");
    document.querySelector(".button-pedidos").classList.remove("active");
}

// Função para mostrar o painel de Aguardando
function mostrarPainelAguardando() {
    document.getElementById("painel-executando").style.display = "none";
    document.getElementById("painel-aguardando").style.display = "block";
    document.getElementById("painel-pedidos").style.display = "none";

    // Adicionar a classe "active" ao botão Aguardando e remover de outros botões
    document.querySelector(".button-executando").classList.remove("active");
    document.querySelector(".button-aguardando").classList.add("active");
    document.querySelector(".button-pedidos").classList.remove("active");
}

// Função para mostrar o painel de Pedidos
function mostrarPainelPedidos() {
    document.getElementById("painel-executando").style.display = "none";
    document.getElementById("painel-aguardando").style.display = "none";
    document.getElementById("painel-pedidos").style.display = "block";

    // Adicionar a classe "active" ao botão Pedidos e remover de outros botões
    document.querySelector(".button-executando").classList.remove("active");
    document.querySelector(".button-aguardando").classList.remove("active");
    document.querySelector(".button-pedidos").classList.add("active");
}

// Adicionar eventos de clique aos botões
document.querySelector(".button-executando").addEventListener("click", mostrarPainelExecutando);
document.querySelector(".button-aguardando").addEventListener("click", mostrarPainelAguardando);
document.querySelector(".button-pedidos").addEventListener("click", mostrarPainelPedidos);

// Exibir o painel de Executando ao carregar a página
window.addEventListener("load", mostrarPainelExecutando);

// Função para destacar a linha clicada e desfazer o destaque das outras
// Variável para armazenar a linha clicada atualmente
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
