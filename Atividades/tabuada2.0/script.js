function calcular() {
    let val = document.getElementById('valor')
    let tab = document.getElementById('seltxt')
    val.style.border = ''
    if (val.value.length == 0) {
        window.alert('Digite um valor')
        val.style.border = '1px solid red'
    } else {
        let n = Number(val.value) 
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = (`${n} x ${i} = ${n*i}`)
            item.value = `tab${i}`
            tab.appendChild(item)
            console.log(item.text)

        }

       
    }


}