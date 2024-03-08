for (let contador = 0; contador < 10; contador = contador++ ){
    console.log("Loop")
}

function executa() {
    console.log("Executando função executa")
}

executa()


function soma(numA, numB) {
    console.log(numA + numB)
}

soma2(2, 2)


const soma2 = function (numA, numB) {
    console.log(numA + numB)
}