// var h = window.prompt('Digite uma hora')

function carregar(){
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora < 12 ){
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#5ab2f5'
        // msg.innerHTML += 'Bom Dia'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#bb786b'
        // msg.innerHTML += 'Boa Tarde'
    }else{
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#092133'
        //msg.innerHTML += 'Boa Noite'
    }
}

