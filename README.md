# DiskCar - Aluguel de Veículos sem Burocracia

Bem-vindo ao DiskCar! Este é um projeto de uma página web para uma plataforma de aluguel de veículos, com uma interface moderna e futurista. Ele foi desenvolvido com HTML, CSS puro e JavaScript, utilizando as bibliotecas **Tailwind CSS**, **Feather Icons** e **Anime.js** para estilização e interatividade.

## Funcionalidades

* **Design Futurista**: Uma interface escura e moderna com cores vibrantes (ciano) e a fonte `Orbitron` para criar um visual de alta tecnologia.
* **Listagem de Veículos**: Exibe uma grade de veículos disponíveis, carregada dinamicamente a partir de um arquivo JSON.
* **Painel Administrativo**: Um painel oculto que permite adicionar e remover carros da lista de forma simples, demonstrando o uso de manipulação de dados em tempo real (dentro do próprio navegador).
* **Componentes Reutilizáveis**: O código é estruturado de forma que os "cards" dos carros e a lista administrativa são gerados por funções JavaScript, facilitando a manutenção.
* **Animações**: Utiliza a biblioteca Anime.js para animações sutis, como o efeito de "brilho" ao passar o mouse sobre os cards.
* **Layout Responsivo**: O design se adapta a diferentes tamanhos de tela, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.

---

## Estrutura do Projeto

O projeto é dividido em quatro arquivos principais para melhor organização e separação de responsabilidades:

* `index.html`: A estrutura principal da página, contendo o HTML e a inclusão dos arquivos CSS e JavaScript.
* `style.css`: Contém todas as classes CSS personalizadas e estilos globais que não são do Tailwind, como as fontes e os efeitos de brilho (`glow-effect`).
* `script.js`: O cérebro do projeto. É responsável por carregar os dados dos veículos, gerenciar a exibição dos cards e controlar as funcionalidades do painel administrativo.
* `cars.json`: Um arquivo JSON que simula uma base de dados, armazenando as informações dos veículos.

---

## Como Rodar o Projeto

Você só precisa de um navegador web para visualizar o projeto. Siga os passos abaixo:

1.  Baixe ou clone este repositório.
2.  Abra o arquivo `index.html` em seu navegador de preferência (Chrome, Firefox, Edge, etc.).

O projeto não requer um servidor local, pois todos os arquivos são estáticos e a manipulação de dados é feita diretamente no navegador.

---

## Tecnologias Utilizadas

* **HTML5**: Para a estrutura da página.
* **CSS3**: Para estilos personalizados.
* **JavaScript (ES6+)**: Para a interatividade e lógica da aplicação.
* **Tailwind CSS**: Um framework de CSS utilitário para estilização rápida e responsiva.
* **Feather Icons**: Uma coleção de ícones de código aberto.
* **Anime.js**: Uma biblioteca JavaScript leve para criar animações complexas e fluidas.
