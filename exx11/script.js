var nume = document.getElementById('num')
var num = Number(nume.value)
var lista = document.getElementById('numeros')
var res = document.getElementById('res')
let valores = []
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar(){
    if (num <= 0 || num >= 101 ){
        window.alert('ERRO, digite um numero valido')
    } else if (inlista(num), valores){
        window.alert('ERRO, digite um numero nao listado')
    }

}