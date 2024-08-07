#  📋 Desafio Back-end CRUD

### Descrição 

O objetivo deste projeto é fornecer uma aplicação para gerenciar ferramentas . Ele oferece operações básicas de criação, leitura, atualização e exclusão para a entidade Tool.

### Proposta

- A aplicação deve ser construída utilizando NodeJS, TypeScript, banco de dados, libraries e ferramentas de sua preferência.
- Utilização de orientação objeto (Injeção de depêndencia, polimorfismo e etc) e os conceitos de SOLID
- Autenticação e autorização (OAuth, JWT).
- Testes Unitários.
- Criar tratamentos de erros mais utilizadas (pelo menos 400 bad request na criação e 500 como erro default)
- Não podem haver duas tools com o mesmo título, independente do case sensitive.
- Uma tools pode ter no mínimo 0 tags e no máximo 8
- A descrição de uma tools pode ter no máximo 256 caracteres.
- A API deve responder na porta 3000.
- Deve haver uma rota para listar todas as ferramentas cadastradas.
- Uma vez que o usuário está autenticado, ele pode ter acesso a todas as ferramentas.
```
  {
    id: 1,
    title: "Notion",
    link: "https://notion.so",
    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: [
      "organization",
      "planning",
      "collaboration",
      "writing",
      "calendar"
    ]
  }
```
- Deve haver uma rota para cadastrar uma nova ferramenta.
- O usuário deve poder remover uma ferramenta por ID.
- Deve haver uma rota para pesquisar um valor por todos os campos da tabela
  
   Exemplo: esta rota é uma pesquisa. Deve pegar valor e busca-lo por todos os campos da tabela, caso encontre deve ser retornado
o valor daquela tabela.
  


### Funcionalidades
- Tool:
  
  * Adicionar novas ferramentas ao sistema.
  
  * Visualizar todas as ferramentas cadastradas.
  
  * Atualizar informações das ferramentas existentes.

  * Excluir ferramentas do sistema.


    
### Tecnologias Utilizadas
- Linguagem: Javascript / Typescript
- Framework: NestJS
- Banco de Dados: MongoDB

### Status do Projeto

  🚀 Em produção

### Features

- [x] Criar o projeto NestJS. 
- [x] Criar o Crud de Tool
- [x] Estabelecer as regras de negócio da aplicação
- [x] Configuração do Banco de Dados
- [x] Aplicar os conceitos SOLID como inversão de dependência e responsabilidade única.
- [x] Criado a autenticação do projeto com JWT.
- [ ] Criado os testes do projeto
- [X] Criar tratamento de erro.

### Pré-requisitos e como rodar a aplicação
- Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [NestJS](https://docs.nestjs.com/first-steps). 
 Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e alguma ferramenta para criar e testar APIs como por exemplo o [Insomnia](https://insomnia.rest/).

### 🎲 Rodando o projeto

```bash
# Clone este repositório
$ git clone <https://github.com/daniel2dfla/desafio-backend.git>

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
```

### ✌🏽 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

### 📩 Contato
Para mais informaçãoes me deixo a disposição pelo email: daniel_2dfla@hotmail.com
