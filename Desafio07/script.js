
function desafio07(arr) {
    const numbers = []


    arr.forEach(list => {
        numbers.push(...list)
    });

    return numbers.sort((a, b) => a - b ) ; 
}


console.log(desafio07([[1,5,3],[6,19,11],[47,128,5],[193,57,72,103]]));