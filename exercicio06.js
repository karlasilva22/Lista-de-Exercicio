// 6)	Faça um programa que com base em duas notas parciais obtidas de um aluno numa disciplina ao longo de um semestre, calcule sua média e seu conceito. A atribuição de conceitos obedece à tabela abaixo:
// 	Média de Aproveitamento Conceito
// 	Entre 9.0 e 10.0        A
// 	Entre 7.5 e 9.0         B
// 	Entre 6.0 e 7.5         C
// 	Entre 4.0 e 6.0         D
// 	Entre 4.0 e zero        E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
var nota1 = 2
var nota2 = 10

var media = (nota1 + nota2)/2

if(media<=4){
  console.log("As notas foram: " + nota1 + " e " + nota2 + "\nA média foi: " + media + "\nConceito E" + "\nReprovado")
}
else if(media>4 && media<=6){
  console.log("As notas foram: " + nota1 + "e " + nota2 + "\nA média foi: " + media + "\nConceito D" + "\nReprovado")
}
else if(media>6 && media<=7.5){
  console.log("As notas foram: " + nota1 + "e " + nota2 + "\nA média foi: " + media + "\nConceito C" + "\nAprovado")
}
else if(media>7.5 && media<=9){
  console.log("As notas foram: " + nota1 + "e " + nota2 + "\nA média foi: " + media + "\nConceito B" + "\nAprovado")
}
else if(media>9 && media<=10){
  console.log("As notas foram: " + nota1 + "e " + nota2 + "\nA média foi: " + media + "\nConceito A" + "\nAprovado")
}