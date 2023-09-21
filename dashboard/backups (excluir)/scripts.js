// scripts.js


		function mostrarPainel(painel) {
			// Oculta todos os painéis coloridos
			document.getElementById("painel-venda").style.display = "none";
			document.getElementById("painel-pedidos").style.display = "none";
			document.getElementById("painel-produtos").style.display = "none";
			document.getElementById("painel-pagamentos").style.display = "none";
			document.getElementById("painel-recebimentos").style.display = "none";
			document.getElementById("painel-relatorios").style.display = "none";
			document.getElementById("painel-cadastro-estoque").style.display = "none";
			document.getElementById("painel-pedidos-estoque").style.display = "none";

			// Exibe o painel colorido correspondente ao botão clicado
			document.getElementById("painel-" + painel).style.display = "block";
		}
	
        // Função para mostrar o conteúdo correspondente ao botão clicado
        function showContent(contentId) {
            // Oculta todos os conteúdos
            const allContents = document.querySelectorAll('.content > div');
            allContents.forEach(content => {
                content.style.display = 'none';
            });

            // Mostra o conteúdo correspondente ao botão clicado
            const selectedContent = document.getElementById(contentId);
            selectedContent.style.display = 'block';
			
			// Remove a classe 'active' de todos os links da barra lateral
			sidebarLinks.forEach(link => {
				link.classList.remove('active');
			});
			
			// Adiciona a classe 'active' ao link do botão selecionado
			const selectedLink = document.querySelector('.sidebar a[href="#' + contentId + '"]');
			selectedLink.classList.add('active');
					
        }
		
		// Seleciona todos os botões com a classe "button-secondary"
        const buttons = document.querySelectorAll('.button-secondary');

        // Adiciona um ouvinte de evento de clique a cada botão
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe "active" de todos os botões
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });
                // Adiciona a classe "active" ao botão clicado
                button.classList.add('active');
            });
        });

        // Define a ação para cada link da barra lateral
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                const contentId = link.getAttribute('href').substring(1);
                showContent(contentId);
            });
        });
		
		
        // Mostra o conteúdo padrão (COMERCIAL) ao carregar a página
        showContent('comercial');
		
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
		