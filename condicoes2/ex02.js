var agora = new Date() // Funcao que pega a hora atual
var hora = agora.getHours() // funçao que pega os minutos e segundos
console.log(`Agora são exatamente ${hora}:00 horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}