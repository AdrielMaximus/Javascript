
function carregar(){
    var data = new Date()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = data.getHours()
    msg.innerHTML =`Agora sao ${hora} Horas`
    if(hora>=6 && hora < 12) {
        img.src = 'ft manha.jpg'
    } else if(hora >=12 && hora < 18){
        img.src = 'ft.tarde.jpg'
    } else{
        img.src = 'ft noite.jpg'
    }
}
