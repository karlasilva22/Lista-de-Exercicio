// 4)	Uma companhia resolveu dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que, através do salário de um colaborador e o reajuste informado para o aumento, calcule o novo salário seguindo os critérios seguintes, baseado no salário atual:
// a.	Salários até R$ 2.800,00 (incluindo): aumento de 20%
// b.	Salários entre R$ 2.800,00 e R$ 7.000,00: aumento de 15%
// c.	Salários entre R$ 7.000,00 e R$ 15.000,00: aumento de 10%
// d.	Salários de R$ 15.000,00 em diante: aumento de 5%
// e.	Após o aumento ser realizado, informe na tela:
// i.	O salário antes do reajuste;
// ii.	O percentual de aumento aplicado;
// iii.	O valor do aumento;
// iv.	O novo salário, após o aumento.

var salario = 16000
var aumento
var novoSalario

if (salario<=2800){
  aumento = salario * 0.2
  novoSalario = salario + aumento
  console.log("Salário antes do ajuste: R$" + salario + "\nAumento aplicado 20% \nValor do aumento: R$" + aumento + "\nNovo salário: R$" + novoSalario)
}
else if (salario>2800 && salario<=7000){
  aumento = salario * 0.15
  novoSalario = salario + aumento
  console.log("Salário antes do ajuste: R$" + salario + "\nAumento aplicado 15% \nValor do aumento: R$" + aumento + "\nNovo salário: R$" + novoSalario)
}
else if (salario>7000 && salario<=15000){
  aumento = salario * 0.1
  novoSalario = salario + aumento
  console.log("Salário antes do ajuste: R$" + salario + "\nAumento aplicado 10% \nValor do aumento: R$" + aumento + "\nNovo salário: R$" + novoSalario)
}
else if (salario>15000){
  aumento = salario * 0.05
  novoSalario = salario + aumento
  console.log("Salário antes do ajuste: R$" + salario + "\nAumento aplicado 5% \nValor do aumento: R$" + aumento + "\nNovo salário: R$" + novoSalario)
}