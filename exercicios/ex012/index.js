//DESSA FORMA PEGA A HORA ATUAL DO SISTEMA
var atual = new Date()
var hora = atual.getHours()

console.log(`Agora são ${hora} horas`)
if (hora < 12){
    console.log('Bom Dia!')
}else if(hora > 12 && hora <= 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}