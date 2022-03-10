var filmes = ['https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91382RVTr3L.jpg', 'https://t.ctcdn.com.br/XDiptbyb8AUjwN_fFj-ns90TrOs=/660x0/smart/i554287.jpeg' ]
var res = document.getElementById('res')
for(let p in filmes){
    res.innerHTML += `<img src="${filmes[p]}" width="30%">   `
}