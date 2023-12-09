//FUNÇÃO PARA ATIVAR O BOTÃO AO PRECIONAR ENTER
document.addEventListener("keypress", function(enter){
    if(enter.key === "Enter"){
        var botao = document.querySelector("input#calc")
        botao.click()
    }
} )

function gerar(){
    var num = document.querySelector('input#num')
    var tab = document.querySelector('select#tabuada')

    if(num.value.length == 0){
        alert('Campo vazio, favor digitar um número')
    }else{
        var n = Number(num.value)
        tab.innerHTML = '' //PARA QUANDO COLOCAR UM NÚMERO E DEPOIS UM OUTRO, NÃO FICAR ADICIONANDO VARIAS TABUADAS UMA ABAIXO DA OUTRA
        for(c=1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`// AQUI O VALUE DO OPTION, NÃO SERVE MUITO PARA O JS, SERVE MAIS PARA PHP
            tab.appendChild(item)

        }
        /*var n = Number(num.value)
        var c = 1
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }*/
    }
}