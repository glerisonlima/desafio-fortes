function substituirNegativosPorUm(vetor) {
    return vetor.map((valor, indice) => {
        if (valor <= 0) {
            valor = 1;
        }
        console.log(`X[${indice}] = ${valor}`);
        return valor;
    });
}

let vetor = [0, -5, 10, -3, 7, -8, 2, -1, 15, 4];

vetor = substituirNegativosPorUm(vetor);