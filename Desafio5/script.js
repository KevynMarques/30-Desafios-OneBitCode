const desafio5 = (string)=>{
    const lowString = string.toLowerCase(); 
     const Arr = lowString.split(''); 
     const OrdenArr = Arr.sort(); 
     
     return OrdenArr[OrdenArr.length -1]; 
}


console.log(desafio5('ALO MUNDO')); 
console.log(desafio5('BEM VINDO')); 
console.log(desafio5('HELLO')); 