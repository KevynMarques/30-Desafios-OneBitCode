

const Receba = (numero)=>{
     const Numero = numero.toString().split(''); 
     const mapeando = Numero.map(digito => Number(digito) ** 2).join('');
         return mapeando; 
     }


console.log(Receba(3514));