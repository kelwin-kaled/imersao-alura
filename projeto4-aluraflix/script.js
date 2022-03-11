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
            res.innerHTML = 'Filme adicionado'
        }
    }else{
        window.alert('não é uma url válida, tem que terminar com jpg')
    }
}
function exibe(){
    res.innerHTML = ''
    for(let p in filmes){
        res.innerHTML += `<img src="${filmes[p]}">`
    }
}
var res = document.getElementById('res')
var filmes = []
