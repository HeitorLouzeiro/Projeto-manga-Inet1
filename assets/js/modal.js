document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    // Adiciona um evento de clique ao modal
    modal.addEventListener('click', function (event) {
        // Verifica se o clique ocorreu dentro ou fora do conteúdo do modal
        if (event.target === modal) {
            fecharModal();
        }
    });

    function mostrarModal(id) {
        modal.style.display = 'block';

        // Carregar o JSON externo usando fetch API
        fetch('../data/mangas.json')
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                // Encontrar o mangá com o ID correspondente
                var manga = data.find(function (m) {
                    return m.id === id;
                });

                // Criar uma string HTML com a imagem do mangá centralizada e com as dimensões desejadas
                var htmlContent = `
    <div style="text-align: center;">
        <img src='${manga.imagem}' alt="${manga.titulo}" style="width: 290px; height: 350px; display: block; margin: 0 auto;">
        <br>
        <h2>${manga.titulo}</h2>
        <h2>Autor: ${manga.autor}</h2>
        <h2>Preço: ${manga.preco}</h2>
    </div>
`;


                // Mostrar as informações do mangá no modal
                document.getElementById('informacoes').innerHTML = htmlContent;

                // Adicionar evento de clique para o botão de comprar
                var comprarBtn = document.getElementById('comprarBtn');
                comprarBtn.onclick = function () {
                    // Aqui você pode adicionar a lógica para a ação de compra
                    Swal.fire({
                        title: `${manga.titulo}`,
                        text: "Compra realizada com sucesso!",
                        icon: "success"
                    });
                    fecharModal();
                };
            })
            .catch(error => console.error('Erro ao carregar o JSON:', error));
    }

    function fecharModal() {
        modal.style.display = 'none';
    }

    window.mostrarModal = mostrarModal;
    window.fecharModal = fecharModal;
});
