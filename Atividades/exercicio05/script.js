let num = document.getElementById('num')
let list = document.getElementById('list')
let res = document.getElementById('res')
let array = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, a) {
    if (a.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inList(num.value, array)) {
        window.alert('Tudo ok')
    } else {
        window.alert('[ERRO] O valor é invalido ou ja esta adicionado na lista!')
    }
}