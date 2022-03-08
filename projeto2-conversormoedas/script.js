function converter(){
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    if(num.value==''){
        window.alert('Digite um valor válido')
    }else{
        num = Number(num.value)
        res.innerHTML = `O valor em dolares é: U$${(5.09*num).toFixed(2)}`
    }

}