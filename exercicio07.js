// 7)	Faça um Programa que através do valor de 3 lados de um triângulo, informe se os valores podem ser um de um triângulo. Se os lados forem de um triângulo, informar se o mesmo é: equilátero, isósceles ou escaleno.
// a.	Dicas:
// i.	Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// ii.	Triângulo Equilátero: três lados iguais;
// iii.	Triângulo Isósceles: quaisquer dois lados iguais;
// iv.	Triângulo Escaleno: três lados diferentes;

var lado1 = 4
var lado2 = 4
var lado3 = 4

if (lado1 + lado2 > lado3) {
  console.log('Os valores informados são de um triângulo.')
  if ((lado1 == lado2) == lado3) {
    console.log('Equilátero.')
  }
  if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log('Isósceles.')
  }
  if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log('Escaleno.')
  }
} else {
  console.log('Não é triângulo.')
}