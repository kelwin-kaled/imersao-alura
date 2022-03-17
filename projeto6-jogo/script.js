function sortearCarta(){
    cartaMaquina = cartas[parseInt(Math.random()*4)]
    cartaJogador = cartaMaquina
    while(cartaMaquina==cartaJogador){
        cartaJogador = cartas[parseInt(Math.random()*4)]
    }    
    document.getElementById('jogo').disabled = false
    document.getElementById('att').disabled = false
    document.getElementById('sorteio').disabled = true
    exibeAtributos()
    exibeCartas()
}
function exibeAtributos(){
    let att = document.getElementById('att')
    for(let p in cartaJogador.atributos){
        if(p=='imagem'){

        }else{
            att.innerHTML +=`<input type="radio" name="atributo" value="${p}"> ${p}`
        }
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
    let attMaquina = document.getElementById('attMaquina')
    if(cartaJogador.atributos[escolha]<cartaMaquina.atributos[escolha]){
        att.innerHTML = 'Você perdeu!'
        attMaquina.innerHTML = `Ataque: ${cartaMaquina.atributos.ataque}<br>Defesa:${cartaMaquina.atributos.defesa}<br>Magia:${cartaMaquina.atributos.magia}`
    }else{
        att.innerHTML = 'Você ganhou!'
        attMaquina.innerHTML = `Ataque: ${cartaMaquina.atributos.ataque}<br>Defesa:${cartaMaquina.atributos.defesa}<br>Magia:${cartaMaquina.atributos.magia}`
    }

}
function exibeCartas(){
    let nJogador = document.getElementById('nJogador')
    let nMaquina = document.getElementById('nMaquina')
    nJogador.innerHTML = `${cartaJogador.nome}`
    nMaquina.innerHTML = `${cartaMaquina.nome}`
    let imgJogador = document.getElementById('imgJogador')
    let imgMaquina = document.getElementById('imgMaquina')
    imgJogador.innerHTML = `<img src="${cartaJogador.atributos.imagem}" width="100%" height="100%">`
    imgMaquina.innerHTML = `<img src="${cartaMaquina.atributos.imagem}" width="100%" height="100%">`
    let attJogador = document.getElementById('attJogador')
    for(let i in cartaJogador.atributos){
        if(i=='imagem'){

        }else{
            attJogador.innerHTML += `${i}:${cartaJogador.atributos[i]}<br>`
        }
    }
    
}




var carta1 = {
    nome:'Sasuke',
    atributos:{
        imagem:'https://upload.wikimedia.org/wikipedia/pt/0/02/Sasukereup.jpg',
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}
var carta2 = {
    nome:'Naruto',
    atributos:{
        imagem:'https://f.i.uol.com.br/fotografia/2021/02/18/1613671083602eaaab101f1_1613671083_3x2_md.jpg',
        ataque: 10,
        defesa: 4,
        magia: 9
    }
}
var carta3 = {
    nome:'Sakura',
    atributos:{
        imagem:'https://media.fortniteapi.io/images/f710f0b124bb6173656eded7c05c2f9c/transparent.png',
        ataque: 3,
        defesa: 6,
        magia: 8
    }
}
var carta4 = {
    nome:'Kakashi',
    atributos:{
        imagem:'https://quartoframe.com.br/wp-content/uploads/2021/07/kakashi-hatake-capa.jpg',
        ataque: 8,
        defesa: 7,
        magia: 7
    }
}

var cartas = [carta1, carta2, carta3,carta4]
var cartaMaquina,cartaJogador