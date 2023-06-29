fetch('armarios.json')
    .then(response => response.json()) // Faz a solicitação de busca e converte a resposta em JavaScript
    .then(data => {
        const armariosDiv = document.getElementById('armarios'); // busca o id 'armarios'
        data.armarios.forEach(armario => { 
            const div = document.createElement('div'); // Cria os elementos armario
            div.className = `armario ${armario.estado}`; // Define a classe CSS de acordo com o estado atual
            div.addEventListener('click', () => { // Adiciona um evento de clique
                if (div.classList.contains('disponivel')) {
                    // Se o elemento tiver a classe 'disponivel'
                    div.classList.remove('disponivel');
                    div.classList.add('ocupado');
                    armario.estado = 'ocupado';
                } else if (div.classList.contains('ocupado')) {
                    // Se o elemento tiver a classe 'ocupado'
                    div.classList.remove('ocupado');
                    div.classList.add('manutencao');
                    armario.estado = 'manutencao';
                } else if (div.classList.contains('manutencao')) {
                    // Se o elemento tiver a classe 'manutencao'
                    div.classList.remove('manutencao');
                    div.classList.add('disponivel');
                    armario.estado = 'disponivel';
                }
            });
            armariosDiv.appendChild(div); // Adiciona a div como filho de 'armariosDiv'
        });
    });
