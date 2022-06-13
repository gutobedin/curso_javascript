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
       array.push(Number(num.value))
       result = document.createElement('option')
       list.appendChild(result)
       result.text = `Numero ${num.value} adicionado.`
       res.innerText = ''
       num.value = ''
       num.focus();
       

    } else {
        window.alert('[ERRO] O valor é invalido ou ja esta adicionado na lista!')
    }
}
function analisar() {
    if (array.length == 0) {
        window.alert('Adicione valores antes de a analisar')
    } else {
        res.innerText = `Foi adicionado a lista ${array.length} numeros.
        `
        let max = Math.max(...array)
        let min = Math.min(...array)
        let soma = array[0]
        for (a = 1; a < array.length; a++  ) {
            soma += array[a]   
        }
        res.innerText += `A soma de todos os numeros da lista é ${soma}
        `
        res.innerText += `A media dos numeros é ${soma / array.length}
        `
        res.innerText += `O maior numero é ${max}
        `
        res.innerText += `O menor numero é ${min}`
    }
}