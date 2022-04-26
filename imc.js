
const resultado = document.getElementById('resultado');


function imc (){

const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const calcular = document.getElementById('calcular').value;
    
if( nome !== '' && altura !== '' && peso !== ''){


    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";
    if (valorIMC < 18.5){
        classificacao = 'Abaixo do peso'
    }else if(valorIMC < 25){
        classificacao = 'Peso ideal!'
    }else if(valorIMC <30){
        classificacao = 'Levemente acima do peso!'
    }else if(valorIMC <35){
        classificacao = 'Obsidade grau I.'
    }else if(valorIMC <=40){
        classificacao = 'Obsidade Grau II.'
    }else if(valorIMC >40){
        classificacao = 'Obsidade Grau III.'
    }

    resultado.textContent = `${nome} seu imc é, ${valorIMC} , você está ${classificacao}`; 


}else{
    resultado.textContent = 'Preencha todos os campos !!'
}

     
}

calcular.addEventListener('click', imc);

