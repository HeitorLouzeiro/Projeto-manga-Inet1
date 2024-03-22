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

        // Suponha que o JSON esteja em uma variável chamada 'mangas'.
        var mangas = [
            {
                "id": 1,
                "titulo": "One Piece",
                "autor": "Eiichiro Oda",
                "genero": "Ação, Aventura, Comédia, Drama, Fantasia, Shounen"
            },
            {
                "id": 2,
                "titulo": "Naruto",
                "autor": "Masashi Kishimoto",
                "genero": "Ação, Aventura, Comédia, Drama, Fantasia, Shounen"
            },
            {
                "id": 3,
                "titulo": "Attack on Titan",
                "autor": "Hajime Isayama",
                "genero": "Ação, Drama, Fantasia, Mistério, Shounen, Terror"
            }
        ];

        // Encontrar o mangá com o ID correspondente
        var manga = mangas.find(function (m) {
            return m.id === id;
        });

        // Mostrar as informações do mangá no modal
        document.getElementById('informacoes').innerHTML = `
            <p>ID: ${manga.id}</p>
            <p>Título: ${manga.titulo}</p>
            <p>Autor: ${manga.autor}</p>
            <p>Gênero: ${manga.genero}</p>
        `;

        // Adicionar evento de clique para o botão de comprar
        var comprarBtn = document.getElementById('comprarBtn');
        comprarBtn.onclick = function () {
            // Aqui você pode adicionar a lógica para a ação de compra
            console.log('Compra realizada para: ' + manga.titulo);
            alert('Compra realizada para: ' + manga.titulo);
            fecharModal();
        };
    }

    function fecharModal() {
        modal.style.display = 'none';
    }

    window.mostrarModal = mostrarModal;
    window.fecharModal = fecharModal;
});
