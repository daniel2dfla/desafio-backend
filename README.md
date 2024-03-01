#  📋 Desafio Back-end CRUD

### Descrição 

O objetivo deste projeto é fornecer uma aplicação para gerenciar ferramentas e os usuários que as utilizam. Ele oferece operações básicas de criação, leitura, atualização e exclusão para ambas as entidades: Tool e User.

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
- Tool Management:
  
  * Adicionar novas ferramentas ao sistema.
  
  * Visualizar todas as ferramentas cadastradas.
  
  * Atualizar informações das ferramentas existentes.

  * Excluir ferramentas do sistema.

- User Management:
  
  * Adicionar novos usuários ao sistema.
  
  * Visualizar todos os usuários cadastrados.
  
  * Atualizar informações dos usuários existentes.
  
  * Excluir usuários do sistema.

    
### Tecnologias Utilizadas
- Linguagem: Javascript / Typescript
- Framework: NestJS
- Banco de Dados: MongoDB

### Status do Projeto

  🚀 Em produção

### Features

- [x] Criar o projeto NestJS. 
- [ ] Criar o Crud de User
- [ ] Criar o Crud de Tool
- [ ] Estabelecer as regras de negócio da aplicação
- [ ] Configuração do Banco de Dados
- [ ] Aplicar os conceitos SOLID como inversão de dependência e responsabilidade única.
- [ ] Criado a autenticação do projeto com JWT.
- [ ] Criado os testes do projeto
- [ ] Criar tratamento de erro.

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
