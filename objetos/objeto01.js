let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(15)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)

// OBJETOS SAO ARRAYS QUE PODEMOS MUDAR SEUS NOMES, COLOCAR MAIS DE UM TIPO DENTRO, COMO UM NUMBER OU STRING
// PODEMOS ADICIONAR FUNCTIONS DENTRO DELAS
