/**
Pedra, papel, tesoura sem if js
*/

const POSS = {
    PEDRA: {
        TESOURA: "Pedra ganha de tesoura",
        PAPEL: "Pedra perde de papel",
        PEDRA: "Empate"
    }, 
    PAPEL: {
        PEDRA: "Papel ganha de pedra",
        TESOURA: "Papel perde de tesoura",
        PAPEL: "Empate"
    }, 
    TESOURA: {
        PAPEL: "Tesoura ganha de papel",
        PEDRA: "Tesoura perde de pedra",
        TESOURA: "Empate"
    }
};

/** empates */
console.log("Empate" === partida("PEDRA", "PEDRA") && "TESTE 1 SUCESSO" || "FALHA");
console.log("Empate" === partida("PAPEL", "PAPEL") && "TESTE 2 SUCESSO" || "FALHA");
console.log("Empate" === partida("TESOURA", "TESOURA") && "TESTE 3 SUCESSO" || "FALHA");

/** vitoria */
console.log("Pedra ganha de tesoura" === partida("PEDRA", "TESOURA") && "TESTE 4 SUCESSO" || "FALHA");
console.log("Papel ganha de pedra" === partida("PAPEL", "PEDRA") && "TESTE 5 SUCESSO" || "FALHA");
console.log("Tesoura ganha de papel" === partida("TESOURA", "PAPEL") && "TESTE 6 SUCESSO" || "FALHA");
/** derrota */
console.log("Pedra perde de papel" === partida("PEDRA", "PAPEL") && "TESTE 7 SUCESSO" || "FALHA");
console.log("Papel perde de tesoura" === partida("PAPEL", "TESOURA") && "TESTE 8 SUCESSO" || "FALHA");
console.log("Tesoura perde de pedra" === partida("TESOURA", "PEDRA") && "TESTE 9 SUCESSO" || "FALHA");

/**
 * ERROS
 */
console.log("" === partida("TESOURAA", "PEDRA") && "TESTE 10 SUCESSO" || "FALHA");
console.log("" === partida("INVALIDO", "PEDRA") && "TESTE 11 SUCESSO" || "FALHA");
console.log("" === partida("", "PEDRA") && "TESTE 12 SUCESSO" || "FALHA");
console.log("" === partida(null, "PEDRA") && "TESTE 13 SUCESSO" || "FALHA");

console.log("" === partida("TESOURA", "PEDRAA") && "TESTE 14 SUCESSO" || "FALHA");
console.log("" === partida("PEDRA", "INVALIDO") && "TESTE 15 SUCESSO" || "FALHA");
console.log("" === partida("PEDRA", "") && "TESTE 16 SUCESSO" || "FALHA");
console.log("" === partida("PEDRA", null) && "TESTE 17 SUCESSO" || "FALHA");


function partida(p1, p2){
    try {
        let jogada1 = p1 && p1.toUpperCase() || (error(p1));
        let jogada2 = p2 && p2.toUpperCase() || (error(p2));

        let parcial = POSS[p1] || (error(p1));
        
        let resultado = parcial[p2] || (error(p2));

        console.log(`Jogador1 é ${jogada1} e Jogador2 é ${jogada2} `);
        console.log(`Resultado: ${resultado} `);
        
        return resultado;   
    } catch (error) {
        console.log(error);
        return "";
    }
}

function error(jogada){
    let jogadaInvalida = jogada || 'vazio';

    throw new Error(`A ${jogadaInvalida} não é uma jogada válida`);
}



