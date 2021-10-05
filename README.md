// 1)	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// a.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// b.	A mensagem "Reprovado", se a média for menor do que sete;
// c.	A mensagem "Aprovado com Distinção", se a média for igual a dez.

var nota1 = 10
var nota2 = 10

var resultado = (nota1 + nota2) / 2

if (resultado >= 7 && resultado < 10) {
  console.log("Aprovado")
}else
if (resultado == 10){
  console.log("Aprovado com Distinção")
}
else{
  console.log("Reprovado")
}
