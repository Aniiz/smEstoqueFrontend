## Requisitos Funcionais:

- O sistema deve permitir o cadastro, entrada, saída, alteração e remoção de produtos com os seguintes atributos: descrição, quantidade e código.
- O sistema deve fornecer um ID para todos os produtos cadastrados.
- O sistema deve possibilitar o login de usuários cadastrados através do e-mail e senha.
- O sistema deve permitir que o usuário verifique a quantidade de produtos em estoque.
- O sistema deve permitir que o usuário pesquise por um produto no estoque com os seguintes atributos: Nome ou ID.
- O sistema deve permitir que o usuário visualize os produtos em ordem alfabética.
- O sistema deve exigir o valor de compra e venda de todos os produtos.
- O sistema deve exibir o valor de compra e venda de todos os produtos.

## Requisitos Não-Funcionais:

- O gerenciador do banco de dados deverá ser o MySQL.
- O sistema deve ser hospedado no servidor do Heroku.
- O software deverá ser operacionalizado em ambiente Android e IOS. 
- O sistema deverá ser desenvolvido nas tecnologias: Node Js e React Native.
- O tempo de resposta do sistema não deve ultrapassar 30 segundos.
- O sistema deverá executar em dispositivos com android 9 ou superior e em dispositivos com IOS 11,.3 ou superior.
- O sistema deverá possuir design responsivo para os seguintes ambientes: mobile.
- O sistema deve ser operacional, de maneira simultânea em diferentes dispositivos.
- O projeto deverá ser executado seguindo como modelo uma arquitetura em camadas, cada camada conterá apenas os algoritmos relacionados à sua função.

## Requisitos Inversos:

- O sistema não deve permitir que o usuário acesse diretamente o banco de dados.
- O sistema não deve permitir que o usuário cadastre ou remova os logins de acesso.
- O sistema não deve permitir que o usuário altere o valor de venda de um produto já vendido.
- O sistema não deve permitir que os parâmetros: preço de compra e preço de venda, tenham valor numérico igual ou menor que 0.
- O sistema não deve permitir que o parâmetro: quantidade, tenha valor numérico inferior a 0.
- O sistema não deve permitir a saída de um produto não cadastrado.
