// Seleciona os botões e o elemento de resultado
const pedraBtn = document.getElementById('pedra');
const papelBtn = document.getElementById('papel');
const tesouraBtn = document.getElementById('tesoura');

// Adiciona event listeners aos botões
pedraBtn.addEventListener('click', function() {
    jogar('👊');
});

papelBtn.addEventListener('click', function() {
    jogar('🤚');
});

tesouraBtn.addEventListener('click', function() {
    jogar('✌️');
});

// Função principal para jogar
function jogar(escolhaUsuario) {
    const opcoes = ['👊', '🤚', '✌️'];
    const escolhaBot = opcoes[Math.floor(Math.random() * 3)];

    // Determina o resultado
    let resultado = '';
    let corFundo = ''; // Cor de fundo inicialmente vazia

    if (escolhaUsuario === escolhaBot) {
        resultado = 'Empate!';
        corFundo = '#2ea6ce'; // Azul
    } else if (
        (escolhaUsuario === '👊' && escolhaBot === '✌️') ||
        (escolhaUsuario === '🤚' && escolhaBot === '👊') ||
        (escolhaUsuario === '✌️' && escolhaBot === '🤚')
    ) {
        resultado = 'Você ganhou!';
        corFundo = '#2ecc71'; // Verde
    } else {
        resultado = 'Você perdeu!';
        corFundo = '#e74c3c'; // Vermelho
    }

    // Transição para outra tela com o estilo de fundo
    mostrarResultado(escolhaUsuario, escolhaBot, resultado, corFundo);
}

// Função para mostrar o resultado em outra tela
function mostrarResultado(usuario, bot, resultado, corFundo) {
    // Cria uma nova página ou uma seção específica para mostrar o resultado
    const novaPagina = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado do Jogo</title>
            <link rel="stylesheet" href="styles.css">
            <style>
                body {
                    transition: background-color 0.5s ease;
                    background-color: ${corFundo};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-size: 2rem; /* Aumenta o tamanho dos emojis */
                    text-align: center;
                }
                .container {
                    width: 100%;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Resultado do Jogo</h2>
                <p>${bot}</p>
                <p>${usuario}</p>
                <p>${resultado}</p>
            </div>
        </body>
        </html>
    `;

    // Abre a nova página ou atualiza a seção atual com o resultado
    document.open();
    document.write(novaPagina);
    document.close();

    // Após 1 segundo, retorna para a tela inicial
    setTimeout(function() {
        location.reload(); // Recarrega a página inicial após 1 segundo
    }, 1300); // Tempo em milissegundos (1.3 segundo)
}
