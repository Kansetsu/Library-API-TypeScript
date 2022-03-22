# Projeto-API-v2 👨‍💻
O projeto consiste em montar uma api com CRUD seguindo as regras do Clean code e boas práticas de GIT.

## A api deve receber dados de uma biblioteca📚:
- Uma rota para cadastrar livros
- Uma rota para se consultar **UM** livro
- Uma rota para conseguir paginar as consultas de um livro, ou seja, não retornar todos, mas sim X páginas de livros por vez.
- Uma rota para se alterar um livro
- Uma rota para de deletar um livro
- Filtro de livros por categoria e autor
- Cadastro de autores ( cardinalidade 1:N  )
- Uma rota para verificação de versão do servidor (puxar do package.json)


## Non Op requests🪄:
- Deve usar um banco noSQL (preferencia para o mongo)
- Deve ser escrita totalmente em TS, incluindo os testes
- Todos os dados devem ser tipados ao máximo possível
- colocar todas as variaveis de ambiente em um .env
- A api deve ter uma estrutura em camadas com estruturas de objetos bem definidas, assim como um swagger para sua documentação.
- Fazer testes unitários
