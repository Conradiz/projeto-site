function carregar(){
    var res = document.getElementById('res')
    res.innerHTML(`Contagem`)
}
function converterTemp(cels){
    var fah = (cels * 1.8) + 32
    return fah
}
var fahrei = converterTemp(30)
window.alert(fahrei)

function calcularDia(salario){
 return (salario/30).toFixed(2);
}
var diaria = calcularDia(5000) ;
alert(diaria)
var salada = ["morango", "banana", "maca", "laranja"]
//adicionando um item no inicio da lista
salada.unshift("pera")
//adicionando um item no final da lista
salada.push("goiaba")
// .length faz a contagem de itens dentro do elemento salada
var numeroElementos = salada.length
alert(`${salada}, ${numeroElementos}`)