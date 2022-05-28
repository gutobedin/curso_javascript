
let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Ordenar valores em ordem crecente


/* for(let pos=0; pos < valores.length;pos++){ // quando colocamos .length, nos referimos ao numero de elementos que temos dentro do vetor
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
    // a posicao 0 tem o valor 8
} */


for(let pos in valores) { //Para cada posicao na variavel composta, eu vou mostrar a posiçao e o valor valores(pos)
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

// cria um novo elemento dentro do vetor
// se eu quiser buscar valores dentro do vetor, eu uso a funcao .indexOf()
// ex

let pos = valores.indexOf(2) // Ele busca no vetor qual é o valor da posicão 2

if (pos == -1) {
    console.log(`A posicao nao foi encontrada!`)
} else {
    console.log(`A posição em que o valor se encontra é na posição ${pos}`)
}