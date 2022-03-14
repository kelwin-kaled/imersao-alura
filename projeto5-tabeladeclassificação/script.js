function pontos(jogos){
    for(let p in jogos){
        jogadores[p].pontos = jogos[p].vitorias*3 + jogos[p].empates
    }
}
function exibe(participantes){
    let elemento = ''
    for(let p in participantes){
        elemento += `<tr>
                        <td>${participantes[p].nome}</td>
                        <td>${participantes[p].vitorias}</td>
                        <td>${participantes[p].empates}</td>
                        <td>${participantes[p].derrotas}</td>
                        <td>${participantes[p].pontos}</td>   
                    </tr>`
    }
    return elemento
}
function adiciona(){
    let jog = document.getElementById('nome')
    let jogador = {nome:jog.value,vitorias:0,empates:0,derrotas:0,pontos:0}
    jogadores.push(jogador)
    res.innerHTML = exibe(jogadores)
}
function vitoria(){
    
}
var jogadores = []
pontos(jogadores)
var res = document.getElementById('body')
