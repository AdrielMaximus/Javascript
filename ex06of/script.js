function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('t xtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
    } else {
        var fsex = document.getElementByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked) {
            genero = 'homem'
        } else if(fsex[1].checked){
            genero = 'mulher'
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}