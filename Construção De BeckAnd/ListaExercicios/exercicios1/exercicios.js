let prompt = require('prompt-sync')()

let nome = prompt("Qual o seu nome?")

console.log("Olá " + nome + " Bem-Vindo")

let idade = prompt("Qual a sua idade? ")

if(idade >= 18){
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade!")
}

let notaProva1 = Number(prompt("Nota prova A1? "))
let notaProva2 = Number(prompt("Nota prova A2? "))

let media = (notaProva1 + notaProva2) / 2

console.log("Media: ", media)

if(media >= 6){
    console.log("Aprovado")
} else {
    console.log("Reprovado viadinho burro")
}
