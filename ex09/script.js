function Calcular(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tabuada')
    var n = Number(num.value)
    var c = 1
    while (c <=10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }

}


