function check(jogador) {
    if (jogador == 'x') {
        return -1;
    } else if (jogador == 'o') {
        return 1;
    }
}

function quemVenceu(partida) {
    let list = partida.split(' ');

    let tabuleiro = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    list.forEach(jogadas => {
        const dados = jogadas.split(':');
        const posicao = dados[1].split(',');

        if (jogadas.match('x') || jogadas.match('o')) {
            tabuleiro[posicao[0] - 1][posicao[1] - 1] = dados[0];
        }
    });

    console.log(tabuleiro);

    let resultado = 0;
    tabuleiro.forEach((posicao, i) => {
        if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[0][i] === tabuleiro[2][i]) {
            resultado = check(posicao[i]);
        }

        else if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][0] === tabuleiro[i][2]) {
            resultado = check(posicao[i]);
        }

        else if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2]) {
            resultado = check(posicao[i]);
        }

        else if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0]) {
            resultado = check(posicao[i]);
        }
    });

    return resultado;
}




