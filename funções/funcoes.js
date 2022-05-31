function parimp(n) {
    if (n%2==0) {
        return `O valor ${n} é Par!`
    } else {
        return `O valor ${n} é Impar!`
    }

}

let res = parimp(112)

console.log(res)