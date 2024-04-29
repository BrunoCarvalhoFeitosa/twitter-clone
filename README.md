<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/twitter-clone">
    <img src="public\images\fav.png" alt="Logo" width="48" height="48" />
  </a>

  <p align="center">
    Redesign da aplicação Twitter feito em Next.js, Prisma, MongoDB e TailwindCSS.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto
O projeto é foi feito em Next.js, Prisma, MongoDB, TailwindCSS e contempla todas as funcionalidades básicas da aplicação real Twitter. Neste projeto, foi desenvolvida uma home page que dá opção ao usuário de fazer login ou cadastrar-se na plataforma. Para a funcionalidade de cadastro, inicialmente o usuário deverá inserir e-mail, nome completo, nome de usuário e uma senha, estes dados serão úteis para autenticação de login e também para a visualização de perfil por parte de usuários terceiros. Para o login, é utilizada a lib next-auth, onde através do JWT é possível autenticar o usuário, criar uma sessão válida e segura, para posteriormente redirecioná-lo ao seu feed, que conterá a atividade de outros usuários já registrados na plataforma. Na página de feed, o usuário inicialmente terá uma barra de navegação que conta com as opções Home (página inicial), Notificações (curtidas ou comentários que algum usuário fez em seus posts), Perfil (é possível complementar o perfil com uma foto, imagem de capa e biografia, além de realizar a mudança de seu nome completo e nome de usuário que foram iseridos inicialmente no primeiro cadastro) e Sair (finalizar a sessão). Como já dito, é possível visualizar o perfil de outros usuários, bem como suas atividades mais recentes, é possível curtir e fazer comentários em seus posts e também é possível seguir outros usuários.

### Cadastro

https://github.com/BrunoCarvalhoFeitosa/twitter-clone/assets/46093815/9e58b9dd-cf20-4e55-946e-2ec2346efda7

### Login

https://github.com/BrunoCarvalhoFeitosa/twitter-clone/assets/46093815/48739618-39ab-488a-a598-0e6be155a3ee

### Edição de perfil

https://github.com/BrunoCarvalhoFeitosa/twitter-clone/assets/46093815/e6b9fac7-336d-4999-9811-61c62d13ba94

### Navegabilidade

https://github.com/BrunoCarvalhoFeitosa/twitter-clone/assets/46093815/37a66450-a712-4188-9ea0-843e97fda27a

### Feito com

* [Next.js](https://nextjs.org)
* [React.js](https://react.dev)
* [MongoDB](https://www.mongodb.com/pt-br)
* [Prisma](https://www.prisma.io)
* [TailwindCSS](https://tailwindcss.com)
* [Vercel](https://vercel.com)

### Hospedagem

O site está em produção neste link: (https://twitter-full-stack-clone.vercel.app).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/twitter-clone.git), após o download será necessário abrir este projeto no seu editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando npm run dev ou yarn dev, após isso, a página será aberta em seu navegador.

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/twitter-clone.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)
