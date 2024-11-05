
  document.addEventListener("DOMContentLoaded", function () {
    // Buscando todos os links com a classe "visualizar-cadastros-link"
    const visualizarCadastrosLinks = document.querySelectorAll(".visualizar-cadastros-link");

    // Adicionando um evento de clique em cada link encontrado
    visualizarCadastrosLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        // Impedir o comportamento padrão do link (neste caso, o redirecionamento para "#")
        event.preventDefault();

        // Redirecionar o usuário para a rota "listar" (ou a rota desejada)
        window.location.href = "/listar";
      });
    });
  });

  
