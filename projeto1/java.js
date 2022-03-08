function carregaDados(){
    let nome = document.getElementById('nome')
    let nota1= document.getElementById('nota1')
    nota1 = Number(nota1.value)
    let nota2= document.getElementById('nota2')
    nota2 = Number(nota2.value)
    let nota3= document.getElementById('nota3')
    nota3 = Number(nota3.value)
    let nota4= document.getElementById('nota4')
    nota4 = Number(nota4.value)
    let res = document.getElementById('res')
    let notaFinal = (nota1+nota2+nota3+nota4)/4
    if(nome.value == '' || nota1<=0 || nota2.value<=0 ||nota3.value<=0 ||nota4.value<=0){
        window.alert('Digite Algum Valor')
    }else{
        res.innerHTML = `${nome.value}, sua média de notas é ${notaFinal.toFixed(1)}`
    }
}