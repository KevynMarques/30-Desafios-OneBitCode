const inputEnviar = document.getElementById('New')
const dados = document.getElementById('Dados')
const valores = document.getElementById('valores')
const calcular = document.getElementById('calculo')
const Result = document.getElementById('Result')
const arrDados = []

inputEnviar.addEventListener('click', e => {
  e.preventDefault()
  const DadosRecebidos = dados.value
  conta(DadosRecebidos)
})

const criaLI = () => {
  const li = document.createElement('li')
  li.style.padding ='5px';
  li.style.listStyle = 'none';
  return li
}

const conta = textoInput => {
  const li = criaLI()
  valores.appendChild(li)
  const numero = parseInt(textoInput)
  arrDados.push(numero)
  li.innerHTML = ` Pontos do aluno : ${textoInput}`; 
  li.style.marginTop = 20;
  limpaInput()
}

const limpaInput = () => {
  dados.value = ''
  dados.focus()
}


const criaRE = () => {
  const RE = document.createElement('li')
  RE.style.width = 20;
  RE.style.listStyle = 'none';
  return RE
}

calcular.addEventListener('click', e => {
  e.preventDefault()
  restulado()
})

const calculou = arrDados => {
  const soma = arrDados.reduce((accum, num) => accum + num, 0)
  const restulado = soma / arrDados.length
  return restulado
}

const restulado = () => {
  const restulado = criaRE()
  Result.appendChild(restulado)
  restulado.innerHTML = ` A média dos alunos é : ${calculou(arrDados)}`
  console.log(arrDados)
}
