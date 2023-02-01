function calcular(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > nano) {
        window.alert('ERRO')
    } else {
        var sexo = document.getElementByName("sex")
        var idade = nano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }
}