function imc_calc() {
    //recebendo parametros
    var altura = document.getElementById('height').value
    var peso = document.getElementById('weight').value

    if (altura == '' || peso == '') {
      alert('Insira os valores requeridos')
      document.getElementById('result').value = ''
    } else {
      //converte as strings em dados tipo float
    altura = parseFloat(altura)
    peso = parseFloat(peso)

    //conversão altura cm para m
    altura = (altura / 100)

    //calculo imc
    var imc = (peso / (altura * altura))

    //condições para classicar o imc
    var classificacao

    if (imc < 16) {
      classificacao = 'Baixo peso muito grave'
    } else if (imc >= 16 && imc <= 16.99) {
      classificacao = 'Baixo peso grave'
    } else if (imc >= 17 && imc <= 18.49) {
      classificacao = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.99) {
      classificacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.99) {
      classificacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.99) {
      classificacao = 'Obesidade grau I'
    } else if (imc >= 35 && imc <= 39.99) {
      classificacao = 'Obesidade grau II'
    } else if (imc >= 40) {  //utilizado somente else pq é a única opção restante
      classificacao = 'Obesidade grau III'
    }

    document.getElementById('result').value = imc.toFixed(2) + ' - ' + classificacao
    }

    
}

function zerar() {
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
    document.getElementById('result').value = ''
}