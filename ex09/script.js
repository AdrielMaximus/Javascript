function Calcular(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tabuada')
    var n = Number(num.value)
    var c = 1
    while (c <=10) {
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        c++
    }

}


