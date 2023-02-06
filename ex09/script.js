function Calcular(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    var c = i
    while (c <f) {
        c += p
        res.innerHTML += (` <br> ${c}`)
    }

}


