function Desafio08 (todosNomes) {
    const Nomes = todosNomes.split(' ')
    let iniciais = '' 
 for(let  i = 0; i < Nomes.length - 1; i++) {
     iniciais += ` ${Nomes[i][0]}.`
 } 

  return `${Nomes[Nomes.length - 1].toUpperCase()},${iniciais.toUpperCase()}`
}

console.log(Desafio08('Kevyn Douglas Albuquerque Marques'))
console.log(Desafio08('Michael Douglas Albuquerque Marques'))
console.log(Desafio08('Jose Douglas Albuquerque Marques'))

