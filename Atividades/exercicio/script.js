function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var cor = document.getElementById('cor')
    var data = new Date()
    /* var hora = data.getHours( )*/
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bomdia
        img.src = '../fotos/manha.png'
        msg.innerHTML = `Agora são ${hora}:00, bom dia!`
        cor.style.background = '#e7adbd'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = '../fotos/tarde.png'
        msg.innerHTML = `Agora são ${hora}:00, boa tarde!`
        cor.style.background = '#fd9402'
    } else {
       // boa noite
       img.src = '../fotos/noite.png'
       msg.innerHTML = `Agora são ${hora}:00, boa noite!`
       cor.style.background = '#2f4150'

    }
}

