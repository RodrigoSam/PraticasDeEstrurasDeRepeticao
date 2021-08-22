numeros = [6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100]

total=0
//indice recebe zero, enquanto o indice for menor que a quantidade itens no array(.length) indice recebe mais 1
for (i=0; i < numeros.length; i++){
  total=total + numeros[i]
 //total que é 0 inicial recebe a somada posiçaõ 0 do array que é 6 dando resultado 6, assim porv diante 6 vai somar com a posiçao 1 do array que é 8 dando 14 que vai ser somado com a posição 3 e assim sucessivamente até que cgue no ultimo numero do indice

console.log(total)
}




