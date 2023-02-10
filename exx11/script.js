var num = document.getElementById('num')
var lista = document.getElementById('numeros')
var res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){

}