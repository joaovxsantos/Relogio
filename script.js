let body = document.querySelector('#b1')



function horas() {

    let data = new Date
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let h2 = document.querySelector('#h2')


    let msg = corrigir(hora) + ":" + corrigir(minutos) + ":" + corrigir(segundos)
    h2.innerHTML = msg
}


function corrigir(e) {

    if (e < 10) {
        e = '0' + e
    }
    return e

}

setInterval(horas, 1000)
body.addEventListener('load', horas())