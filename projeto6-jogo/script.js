function sortearCarta(){
    cartaMaquina = cartas[parseInt(Math.random()*3)]
    cartaJogador = cartaMaquina
    while(cartaMaquina==cartaJogador){
        cartaJogador = cartas[parseInt(Math.random()*3)]
    }    
    document.getElementById('jogo').disabled = false
    document.getElementById('att').disabled = false
    document.getElementById('sorteio').disabled = true
    exibeAtributos()
}
function exibeAtributos(){
    let att = document.getElementById('att')
    let res = document.getElementById('res')
    res.innerHTML = `Jogador: ${cartaJogador.nome} Máquina: ${cartaMaquina.nome}`
    for(let p in cartaJogador.atributos){
        att.innerHTML +=`<input type="radio" name="atributo" value="${p}"> ${p}`
    }
}
function obter(){
    let radio = document.getElementsByName('atributo')
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked){
            return radio[i].value
        }
    }
}
function jogar(){
    let escolha = obter()
    let att = document.getElementById('att')
    att.innerHTML = `${escolha}`

}




var carta1 = {
    nome:'Sasuke',
    atributos:{
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}
var carta2 = {
    nome:'Naruto',
    atributos:{
        ataque: 10,
        defesa: 4,
        magia: 9
    }
}
var carta3 = {
    nome:'Sakura',
    atributos:{
        ataque: 3,
        defesa: 6,
        magia: 8
    }
}
var cartas = [carta1, carta2, carta3]
var cartaMaquina,cartaJogador