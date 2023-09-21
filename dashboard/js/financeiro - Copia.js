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
	
	function filtrarPagamentos() {
		// Obtenha os valores dos filtros
		const data = document.getElementById("data").value;
		const status = document.getElementById("filtro").value;
		const fornecedor = document.getElementById("filtro-fornecedor").value;

		// Filtrar a lista de pagamentos com base nos filtros
		const listaFiltrada = listaPagamentos.filter(pagamento => {
			// Filtro de data
			if (data && pagamento.vencimento !== data) {
				return false;
			}

			// Filtro de status
			if (status === "abertos" && pagamento.status !== "Aberto") {
				return false;
			}
			if (status === "fechados" && pagamento.status !== "Fechado") {
				return false;
			}

			// Filtro de fornecedor
			if (fornecedor !== "Todos" && pagamento.fornecedor !== fornecedor) {
				return false;
			}

			return true;
		});

		// Limpe a tabela atual
		const tabela = document.getElementById("tabela-pagamentos");
		const tbody = tabela.querySelector("tbody");
		tbody.innerHTML = "";

		// Adicione os pagamentos filtrados à tabela
		listaFiltrada.forEach(function(pagamento) {
			const novaLinha = criarLinhaPagamento(pagamento);
			tbody.appendChild(novaLinha);
		});
	}

	// Simulação de dados da lista (pode ser obtido de uma pesquisa)
	const listaPagamentos = [
	  { posicao: 01, fornecedor: "Fornecedor X", valor: 250.00, vencimento: "2023-02-15", formaPgto: "Pix", Status: "Aberto"},
	  { posicao: 02, fornecedor: "Fornecedor Y", valor: 750.00, vencimento: "2023-03-20", formaPgto: "Boleto", Status: "Aberto" },
	  { posicao: 03, fornecedor: "Fornecedor Z", valor: 125.50, vencimento: "2023-04-10", formaPgto: "Crédito", Status: "Aberto" },
	  { posicao: 04, fornecedor: "Fornecedor W", valor: 98.00, vencimento: "2023-05-05", formaPgto: "Débito", Status: "Aberto" },
	  { posicao: 05, fornecedor: "Fornecedor P", valor: 550.00, vencimento: "2023-06-25", formaPgto: "Dinheiro", Status: "Aberto" },
	  { posicao: 06, fornecedor: "Fornecedor Q", valor: 75.80, vencimento: "2023-07-12", formaPgto: "Pix", Status: "Aberto" },
	  { posicao: 07, fornecedor: "Fornecedor R", valor: 320.00, vencimento: "2023-08-30", formaPgto: "Boleto" , Status: "Aberto"},
	  { posicao: 08, fornecedor: "Fornecedor S", valor: 420.00, vencimento: "2023-09-18", formaPgto: "Crédito", Status: "Aberto" },
	  { posicao: 09, fornecedor: "Fornecedor T", valor: 69.99, vencimento: "2023-10-07", formaPgto: "Débito", Status: "Aberto" },
	  { posicao: 10, fornecedor: "Fornecedor U", valor: 880.00, vencimento: "2023-11-22", formaPgto: "Dinheiro", Status: "Aberto" },
	  { posicao: 11, fornecedor: "Fornecedor V", valor: 150.00, vencimento: "2023-12-10", formaPgto: "Pix", Status: "Aberto" },
	  { posicao: 12, fornecedor: "Fornecedor A", valor: 325.00, vencimento: "2023-01-18", formaPgto: "Boleto", Status: "Aberto" },
	  { posicao: 13, fornecedor: "Fornecedor B", valor: 95.25, vencimento: "2023-02-09", formaPgto: "Crédito", Status: "Aberto" },
	  { posicao: 14, fornecedor: "Fornecedor C", valor: 77.50, vencimento: "2023-03-04", formaPgto: "Débito", Status: "Aberto" },
	  { posicao: 15, fornecedor: "Fornecedor D", valor: 520.00, vencimento: "2023-04-17", formaPgto: "Dinheiro", Status: "Aberto" },
	  { posicao: 16, fornecedor: "Fornecedor E", valor: 190.00, vencimento: "2023-05-22", formaPgto: "Pix", Status: "Aberto" },
	  { posicao: 17, fornecedor: "Fornecedor F", valor: 88.75, vencimento: "2023-06-30", formaPgto: "Boleto", Status: "Aberto" },
	  { posicao: 18, fornecedor: "Fornecedor G", valor: 440.00, vencimento: "2023-07-11", formaPgto: "Crédito", Status: "Aberto" },
	  { posicao: 19, fornecedor: "Fornecedor H", valor: 74.90, vencimento: "2023-08-27", formaPgto: "Débito", Status: "Aberto" },
	  { posicao: 20, fornecedor: "Fornecedor I", valor: 770.00, vencimento: "2023-09-05", formaPgto: "Dinheiro", Status: "Aberto" },
	];

	// Função para criar uma nova linha na tabela
	function criarLinhaPagamento(pagamento) {
		const novaLinha = document.createElement("tr");

		novaLinha.innerHTML = `
			<td>${pagamento.posicao}</td>
			<td>${pagamento.fornecedor}</td>
			<td>${pagamento.valor}</td>
			<td>${pagamento.vencimento}</td>
			<td>${pagamento.formaPgto}</td>
			<td>${pagamento.Status}</td>
		`;

		novaLinha.addEventListener("dblclick", function() {
			alert(`Você Clicou duas Vezes em ${pagamento.fornecedor}`);
		});

		return novaLinha;
	}

	// Adiciona os pagamentos à tabela
	const tabela = document.getElementById("tabela-pagamentos");
	const tbody = tabela.querySelector("tbody");

	listaPagamentos.forEach(function(pagamento) {
		const novaLinha = criarLinhaPagamento(pagamento);
		tbody.appendChild(novaLinha);
	});