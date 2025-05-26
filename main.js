const inputValorImovel = document.getElementById("valor_imovel");

inputValorImovel.addEventListener("input", function (e) {

    let valor = e.target.value.replace(/\D/g, "");


    if (!valor) {
        e.target.value = "";
        return;
    }

    
    let valorNumerico = parseInt(valor, 10) / 100;


    e.target.value = valorNumerico.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
});


function valor_formatado(valorFormatado) {
    if (!valorFormatado) return 0;

    let valorLimpo = valorFormatado.replace(/[R$\s]/g, "").replace(/\./g, "").replace(",", ".");
    let valorNumerico = parseFloat(valorLimpo);

    return isNaN(valorNumerico) ? 0 : valorNumerico;
}

function simular(event) {
    event.preventDefault();

    const imovel = valor_formatado(document.getElementById("valor_imovel").value);
    const percentual = parseFloat(document.getElementById("percentual_imovel").value);
    const contrato = parseFloat(document.getElementById("anos_contrato").value);

    if (imovel <= 0) {
        alert("Informe um valor válido para o imóvel (maior que zero).");
        return;
    }
    if (percentual < 5 || percentual > 20 || isNaN(percentual)) {
        alert("Informe um percentual entre 5 e 20.");
        return;
    }
    if (contrato < 1 || contrato > 5 || isNaN(contrato)) {
        alert("Informe um tempo de contrato entre 1 e 5 anos.");
        return;
    }

    const valor_entrada = imovel * (percentual / 100);
    const valor_a_financiar = imovel - valor_entrada;
    const total_a_guardar = imovel * 0.15;
    const valor_mensal = total_a_guardar / (contrato * 12);

    document.getElementById("valor_entrada").innerText = valor_entrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("valor_financiado").innerText = valor_a_financiar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("total_a_guardar").innerText = total_a_guardar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("parcela_mensal").innerText = valor_mensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
