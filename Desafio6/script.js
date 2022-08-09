



function Invert (palavras){
   
  const wordArray = palavras.split(' '); 
   const invertArry = wordArray.map((word)=>{
     const minPalavra = word.toLowerCase()
     return minPalavra.split('').reverse().join('');
  }) 

  return invertArry.join(' '); 

}; 

console.log(Invert('Invertendo Palavras Nesse Teste'))