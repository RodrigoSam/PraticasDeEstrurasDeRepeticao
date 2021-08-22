// timesDeFutebol = ["Grêmio","Inter","Juventude","Flamengo"]
// quantidadeDeTimes = timesDeFutebol.length
// console.log(quantidadeDeTimes)



// car = ["fox","uno","polo","fiesta","amarok"]
// tiposDeCarro=car
// quantCars=car.length
// console.log(tiposDeCarro)
// console.log("são ",quantCars," Carros na garagem")


nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia",
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa","Gustavo", "Maria Eduarda", "Pedro", "Sofia","Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila","Heitor", "Lara", "Henrique", "Valentina","Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo","Yasmin", "Benjamin", "Sophia","Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda","Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

console.log(nomesComuns)
quantDeNomes=nomesComuns.length
console.log(quantDeNomes)
meuNome="Thais"
console.log("Me chamo ",meuNome,",será que meu nome está entre os 60 mais comuns?")

for(ind = 0 ; ind < quantDeNomes ; ind++){

compararNome = " seu nome é uma jóia rara"
  if (meuNome==nomesComuns[ind]){
    compararNome = " seu nome está na lista dos mais comuns"
    break
   
    


  }


}
 console.log(meuNome,compararNome)