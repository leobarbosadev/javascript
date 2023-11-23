function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //PEGA O ANO COMPLETO COM 4 DÍGITOS
    var formAno = document.getElementById('ano') // POSSO USAR O querySelector TAMBÉM
    var res  = document.querySelector('div#resultado')
    if (formAno.value.length == 0 || formAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var formSex = document.getElementsByName('sx') //TEM QUE SER PELO getElementsByName POIS OS 2 RADIOS TEM O MESMO NAME
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img') //ESSA LINHA E A DEBAIXO, COLOCAM IMAGEM DINAMICAMENTE, SERIA A MESMA COISA SE EU NO HTML COLOCASSE UMA TAG img COM O id foto
        img.setAttribute('id', 'foto')
        if (formSex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menino.png')
                img.style.paddingTop = '15px'
            }else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagens/jovem-homem.png')
                img.style.paddingTop = '15px'
            }else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'imagens/homem.png')
                img.style.paddingTop = '15px'
            }else{
                img.setAttribute('src', 'imagens/senhor.png')
                img.style.paddingTop = '15px'
            }
        } else{
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','imagens/menina.png')
                img.style.paddingTop = '15px'
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagens/jovem-mulher.png')
                img.style.paddingTop = '15px'
            }else if(idade >= 21 && idade < 50){
                img.setAttribute('src', 'imagens/mulher.png')
                img.style.paddingTop = '15px'
            }else{
                img.setAttribute('src', 'imagens/senhora.png')
            }
        }
        res.style.textAlign = 'center' //ALINHAR UM TEXTO VIA JavaScript
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)//VAI ADICIONAR UM ELEMENTO APÓS A FRASE ACIMA
    }
}