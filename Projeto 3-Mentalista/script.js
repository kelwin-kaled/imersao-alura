function chutar(){
    let res = document.getElementById('res')
    let num = document.getElementById('num')
    if(num.value == ''){
        window.alert('Digite alguma coisa seu maldito!!')
    }else if(parseInt(num.value)<0){
        window.alert('Digite alguma coisa seu maldito que seja maior que ou igual 0!!')
    }else if(parseInt(num.value)>10){
        window.alert('Digite alguma coisa seu maldito que seja menor que ou igual 10!!')
    }else{
        if(parseInt(num.value)==aleatoria&&nTentativas>0){
            res.innerText = 'Parabéns'
            nTentativas = 0
        }else if(nTentativas>0&&nTentativas<=3){
            res.innerHTML = `Tente denovo, você tem mais ${nTentativas} tentativas`
        }else{
            res.innerHTML = `Recarregue a página e tente denovo, o número é ${aleatoria}`
        }
    }
    nTentativas--
    
}
    var aleatoria = parseInt(Math.random()*11)
    var nTentativas = 3;


