// 2)	Faça um Programa que leia três números e mostre o maior e o menor deles.

var numero1 = 10
var numero2 = 50
var numero3 = 100

if (numero1 > numero2 && numero1 > numero3){
  console.log("Número 1 é o maior")
}
if (numero2 > numero1 && numero2 > numero3){
  console.log("Número 2 é o maior")
}
if (numero3 > numero1 && numero3 > numero2){
  console.log("Número 3 é o maior")
}

if (numero1 < numero2 && numero1 < numero3){
    console.log("Número 1 é o menor")
}
if (numero2 < numero1 && numero2 < numero3){
    console.log("Número 2 é o menor")
}
if (numero3 < numero1 && numero3 < numero2){
    console.log("Número 3 é o menor")
}
  console.log("Programa finalizado.")