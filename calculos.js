/* Desenvolva aqui a rotina */
const btn = document.getElementById('btn_calcular')

function calcularReceita() {
const valorBase = document.getElementById('valor_base').value;
const valorTransporte = document.getElementById('valor_transporte').value;
const valorAlimentacao = document.getElementById('valor_alimentacao').value;
const receitaTotal = document.querySelector('#valor_receita')


const receitaSoma = Number(valorBase) + Number(valorTransporte) + Number(valorAlimentacao);

receitaTotal.value = receitaSoma

return receitaSoma

}


function calcularDesconto(){
    const valorAutomovel = document.getElementById('valor_automovel').value;
    const faltas = document.getElementById('faltas').value;
    const valorDesconto = document.getElementById('valor_descontos');

    const somaDesconto = Number(valorAutomovel) + Number(faltas);

    valorDesconto.value = somaDesconto
    
    return somaDesconto;

}

function calcularSalario(){
    const receitaSoma = calcularReceita();
    const somaDesconto = calcularDesconto();

    const valorTotal = document.getElementById('valor_total');

    const somaTotal  =  receitaSoma - somaDesconto;

    valorTotal.value = somaTotal

    return somaTotal;
}

btn.addEventListener('click',calcularSalario)