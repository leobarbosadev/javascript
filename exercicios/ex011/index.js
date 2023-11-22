var idade = 87
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota')
} else if(idade >= 16 && idade < 18 || idade > 70){// SE A IDADE NÃO É MENOR DO QUE 16, ELA É MAIOR OU IGUAL A 16, ENTÃO ESSA PRIMEIRA PARTE ANTES DO && PODERIA RETIRAR
        console.log('voto opcional')
}else if (idade >= 18){
    console.log('Voto obrigatório')
}