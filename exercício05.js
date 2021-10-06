// 5)	Faça um Programa que leia um número e exiba o dia correspondente da semana. (1 - Domingo, 2 - Segunda, etc.), se digitar outro valor deve aparecer valor inválidos.

var dia = 5

if (dia==1){
  console.log("Domingo")
}
else if (dia==2){
  console.log("Segunda")
}
else if (dia==3){
  console.log("Terça")
}
else if (dia==4){
  console.log("Quarta")
}
else if (dia==5){
  console.log("Quinta")
}
else if (dia==6){
  console.log("Sexta")
}
else if (dia==7){
  console.log("Sabado")
}
else if (dia>7){
  console.log("Valor inválido.")
}