function calcularImpostoRenda(salario) {
    if (salario <= 2000.00) {
        return "Isento";
    }

    const faixas = [
        { limite: 2000.00, taxa: 0 },
        { limite: 3000.00, taxa: 0.08 },
        { limite: 4500.00, taxa: 0.18 },
        { limite: Infinity, taxa: 0.28 }
    ];

    let imposto = 0;
    let salarioRestante = salario;
    let faixaAnterior = 0;

    for (const faixa of faixas) {
        if (salarioRestante > faixa.limite) {
            imposto += (faixa.limite - faixaAnterior) * faixa.taxa;
            faixaAnterior = faixa.limite;
        } else {
            imposto += (salarioRestante - faixaAnterior) * faixa.taxa;
            break;
        }
    }

    return `R$ ${imposto.toFixed(2)}`;
}

console.log(calcularImpostoRenda(3002.00));