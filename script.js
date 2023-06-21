fetch('armarios.json')
    .then(response => response.json())
    .then(data => {
        const armariosDiv = document.getElementById('armarios');
        data.armarios.forEach(armario => {
            const div = document.createElement('div');
            div.className = `armario ${armario.estado}`;
            div.addEventListener('click', () => {
                if (div.classList.contains('disponivel')) {
                    div.classList.remove('disponivel');
                    div.classList.add('ocupado');
                    armario.estado = 'ocupado';
                } else if (div.classList.contains('ocupado')) {
                    div.classList.remove('ocupado');
                    div.classList.add('manutencao');
                    armario.estado = 'manutencao';
                } else if (div.classList.contains('manutencao')) {
                    div.classList.remove('manutencao');
                    div.classList.add('disponivel');
                    armario.estado = 'disponivel';
                }
            });
            armariosDiv.appendChild(div);
        });
    });