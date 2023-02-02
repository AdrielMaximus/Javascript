function v() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(' t xtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
    } else {
        var fsex = document.getElementByName("radsex")
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var img = document.createElement
        var genero = ''
        if(fsex[0].checked){
            genero = 'homem'
        } else if(fsex[1].checked){
            genero = 'mulher'
        }
        res,style.textalign = 'center'
    }
}