//FUNÇÃO PARA ATIVAR O BOTÃO AO PRECIONAR ENTER
document.addEventListener("keypress", function (enter) {
    if (enter.key === "Enter") {
        var botao = document.querySelector("input#calc")
        botao.click()
    }
})

function contar() {
    var ini = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo iválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}