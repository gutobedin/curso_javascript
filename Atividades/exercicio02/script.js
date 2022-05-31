function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // pro js saber que é tipo number
        res.innerHTML = `A idade é: ${idade}`
        var genero = ''
        var img = document.createElement('img') // Criando um elemento html aqui no JS, criamos um IMG com o id = foto
        img.setAttribute('id','foto') // Criando um elemento html aqui no JS, criamos um IMG com o id = foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade >= 21 && idade < 60) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade >= 21 && idade < 60) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
       /* IMPORTANTE */ res.appendChild(img) // Adicionando IMG depois do '`Detectamos ${genero} com ${idade} anos.'

    }
}