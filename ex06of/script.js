function calcular(){
    var data = new Date()
    var nano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > nano) {
        window.alert('ERRO')
    } else {
        var sexo = document.getElementByName("sex")
        var idade = nano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }
}