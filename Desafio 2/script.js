

const desafio2  = (num)=> {
   if( num === 0) { 
    return 'Fim do chunck'
   }

   if( num === 1) {
      return 'chunck '
   } else  {
    return 'chunck-' + desafio2(num -1); 
   }
}

console.log(desafio2(6)); 

