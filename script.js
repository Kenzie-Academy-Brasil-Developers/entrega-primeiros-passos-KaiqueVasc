let valorRefrigerante =11.99;
let valorMacarrao = 6.99;
let valorErvilha = 6.99;
let valorArroz = 22.99;
let valorFeijao =11.89;
let valorVinho =70.00;

let totalRefrigerante = Number(valorRefrigerante) * Number(3)
let totalMacarrao = Number(valorMacarrao) * Number(4)
let totalErvilha = Number(valorErvilha) * Number(3)
let totalArroz = Number(valorArroz) * Number(3)
let totalFeijao = Number(valorFeijao) * Number(2)
let totalVinho = Number(valorVinho) * Number(3)

let totalCompra = (totalRefrigerante+totalMacarrao+totalErvilha+totalArroz+totalFeijao+totalVinho).toFixed(2);

let metadeCompra = (totalCompra/2).toFixed(2);

let metadeVinho = (totalVinho/2).toFixed(2);

if(totalCompra % 2 == 0){
    let eu = Number(metadeCompra) - Number(metadeVinho);
    let amigo = Number(metadeCompra) + Number(totalVinho);
    console.log (`Eu irei pagar ${eu.toFixed(2)} reais e o Lucas irá pagar ${amigo.toFixed(2)} reais`);
} else{
    let euim = Number(metadeCompra) + Number(metadeVinho);
    let amigoim = Number(metadeCompra) + Number(metadeVinho);
    console.log (`Eu irei pagar ${euim.toFixed(2)} reais e o Lucas irá pagar ${amigoim.toFixed(2)} reais`)

} 
  
let precoMacarrao = parseFloat(prompt(`Digite o valor do macarrão`));
let quantidadeMacarrao = parseInt(prompt(`Quantas unidades?`));

totalMac = precoMacarrao * quantidadeMacarrao;

alert(`Valor total a ser pago: ${totalMac}`);

let precoRefrigerante = parseFloat(prompt(`Digite o valor do refrigerante`));
let quantidadeRefrigerante = parseInt(prompt(`Quantas unidades?`));

totalRefri = precoRefrigerante * quantidadeRefrigerante;

alert(`Valor total a ser pago: ${totalRefri}`);

let precoErvilha = parseFloat(prompt(`Digite o valor da ervilha`));
let quantidadeErvilha = parseInt(prompt(`Quantas unidades?`));

totalErv = precoErvilha * quantidadeErvilha;

alert(`Valor total a ser pago: ${totalErv}`);

let precoArroz = parseFloat(prompt(`Digite o valor do arroz`));
let quantidadeArroz = parseInt(prompt(`Quantas unidades?`));

totalArr = precoArroz * quantidadeArroz;

alert(`O valor a ser pago: ${totalArr}`);

let precoFeijao = parseFloat(prompt(`Digite o valor do feijão`));
let quantidadeFeijao = parseInt(prompt(`Quantas unidades?`));

totalFeij = precoFeijao * quantidadeFeijao;

alert(`O valor a ser pago: ${totalFeij}`);

let precoVinho = parseFloat(prompt(`Digite o valor do vinho`));
let quantidadeVinho = parseInt(prompt(`Quantas unidades?`));

totalVin = precoVinho * quantidadeVinho;

alert(`O valor a ser pago: ${totalVin}`);

totalProdutos = Number(totalMac) + Number(totalRefri) + Number(totalErv) + Number(totalArr) + Number(totalFeij) + Number(totalVin);

alert(`O total da compra foi de : ${totalProdutos}`)




