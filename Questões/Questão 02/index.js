function somaNaoMultiplosDe13(x, y) {
    let min = Math.min(x, y);
    let max = Math.max(x, y);
    let soma = 0;

    for (let i = min; i <= max; i++) {
        if (i % 13 !== 0) {
            soma += i;
        }
    }
    
    return soma;
}

console.log(somaNaoMultiplosDe13(15, 200));