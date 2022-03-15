function imc_calc() {
    //recebendo parametros
    let altura = document.getElementById('height').value
    let peso = document.getElementById('weight').value.replace(",",".")

    if (altura == '' || peso == '') {
      alert('Insira os valores requeridos')
      document.getElementById('result').value = ''
    } else {
      //converte as strings em dados tipo float
    altura = parseFloat(altura)
    peso = parseFloat(peso)
      console.log(altura)
      console.log(peso)

    //conversão altura cm para m
    altura = (altura / 100)

    //calculo imc
    let imc = (peso / (altura * altura))

    //condições para classicar o imc
    let classificacao

    let resultColor = document.getElementById('result')

    if (imc < 16) {
      classificacao = 'Baixo peso muito grave';
      resultColor.className = "color-three"
    } else if (imc >= 16 && imc <= 17) {
      classificacao = 'Baixo peso grave'
      resultColor.className = "color-two"
    } else if (imc >= 17 && imc <= 18.49) {
      classificacao = 'Baixo peso'
      resultColor.className = "color-one"
    } else if (imc >= 18.5 && imc <= 24.99) {
      classificacao = 'Peso normal'
      resultColor.className = "color-zero"
    } else if (imc >= 25 && imc <= 29.99) {
      classificacao = 'Sobrepeso'
      resultColor.className = "color-one"
    } else if (imc >= 30 && imc <= 34.99) {
      classificacao = 'Obesidade grau I'
      resultColor.className = "color-two"
    } else if (imc >= 35 && imc <= 39.99) {
      classificacao = 'Obesidade grau II'
      resultColor.className = "color-three"
    } else if (imc >= 40) {  //utilizado somente else pq é a única opção restante
      classificacao = 'Obesidade grau III'
      resultColor.className = "color-four"
    }

    document.getElementById('result').value = imc.toFixed(2) + ' - ' + classificacao
  }
}

function zerar() {
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
    document.getElementById('result').value = ''
    document.getElementById('result').className = ''
}