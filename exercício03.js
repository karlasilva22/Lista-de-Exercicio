// 3)	Faça um programa que, com base no preço de três produtos, informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

var preco1 = 10
var preco2 = 2
var preco3 = 30

if (preco1 < preco2 && preco1 < preco3){
  console.log("Compre o produto 1")
}
if (preco2 < preco1 && preco2 < preco3){
  console.log("Compre o produto 2")
}
if (preco3 < preco1 && preco3 < preco2){
  console.log("Compre o produto 3")
}
console.log("Programa finalizado.")