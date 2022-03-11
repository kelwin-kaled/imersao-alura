function adiciona(){
    var url = document.getElementById('url')
    if(url.value == ''){
        window.alert('adicione uma URL')
    }else if(url.value.endsWith('.jpg')){
        let num = 0;
        for(let x in filmes){
            if(url.value == filmes[x]){
                num++
                window.alert('URL já existente, tente outra')
            }
        }
        if(num==0){
            filmes.push(url.value)
            exibe()
        }
    }else{
        window.alert('não é uma url válida, tem que terminar com jpg')
    }
}
function exibe(){
    res.innerHTML = ''
    for(let p in filmes){
        res.innerHTML += `<img src="${filmes[p]}"><br>Posição do filme: ${p}<br>`
    }
}
function remove(){
    let indice = document.getElementById('indice')
    if(indice.value==''){
        window.alert('Digite o fime que deseja remover')
    }else{
        indice = Number.parseInt(indice.value)
         filmes = filmes.slice(indice,1)
        exibe()
    }
}
var res = document.getElementById('res')
var filmes = []
