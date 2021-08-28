const hamburguer = document.querySelector(".hamburguer");
/* Cria a variável hamburguer e percorrer o dom para selecionar a classe */

hamburguer.addEventListener("click", function(){
sidebar = document.querySelector(".sidebar").classList.toggle("show-menu") /* Adiciona o evento de click no hamburguer e a partir do click executa a função para mostrar ou remover o menu */
})


