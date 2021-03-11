Projeto em Desenvolvimento - Gerenciador de mercearias, padarias, hortifrutis e lojas em geral.

	Tecnologias:
Frontend: ReactJS, HTML5, CSS, Styled Components, SemanticUI

Backend: NodeJS

Banco: NoSql - MongoDB

	Organização:
Estão sendo utilizadas as metodologias ágeis Scrum e Kanban nesse projeto. 
Versionamento de código Git (Github).

Na aba 'Projects' do repositório é possível acessar o Kanban de todo o projeto e os passos que vão ser seguidos para a finalização do mesmo.

	O projeto:
O intuito inicial desse projeto é para a matéria de PROJ. INT. DE ANÁLISE E DESENV. DE SISTEMAS do curso de Análise e Desenvolvimento de Sistemas administrada pelo professor Ronney Moreira de Castro e também para uma possível implementação real.

O gerenciador será dividido em abas: Início, Compras, Caixa, Estoque e Sobre.

 -Início: Será uma tela com um simples Dashboard dinâmico que se altera de acordo com os dados inseridos no sistema, que mostra quanto ja foi gasto em Compras, quanto ja entrou nas Vendas e quantos produtos existem. 

 -Compras: Será possível adicionar/comprar mais produtos e também retirar. Sempre que for adicionado um produto, será somado no valor de Compras para o cálculo de lucro da página Inicial(Dashboard) e na listagem do Estoque.

 -Caixa: Aba onde as vendas acontecerão. Terá a listagem de todos os produtos do Estoque e ao vender um produto, será subtraído do estoque a quantidade vendida e somado no banco no valor de Vendas para o calculo do lucro que fica na página Inicial (Dashboard);

 -Estoque: Terá uma tabela que lista todos os produtos do estoque do estabelecimento. Será atualizado a cada compra e venda(quantidade); Cada produto terá: id, nome, quantidade (em kg), preço total que o produto foi comprado e o preço de revenda (cada kg);

 -Sobre: Aba informativa sobre o desenvolvimento do sistema

Adicional: Será avaliado o tempo de finalização do projeto para implementação de uma tela de login no painel


Para rodar a aplicação no estado que está atualmente, basta baixar o NodeJS e instalar. Após isso, baixar o projeto, copiar o caminho da pasta do projeto baixado e abrir ela pelo CMD ou outro gerenciador de comandos. Digite o comando NPM INSTALL para instalar todas as dependências do projeto e logo em seguida NPM START para iniciar o projeto. Provavelmente ele abrirá no seu navegador padrão em http://localhost:3000/, mas será necessário criar uma versão do google chrome NoCors, Para isso, basta ir em 'Propriedades' no ícone do Chrome e colar no destino: "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"