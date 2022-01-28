const list = [
	{ produto: "geladeira", categoria: "eletrodomestico", valor: 1432.67 },
	{ produto: "fogao", categoria: "eletrodomestico", valor: 852.11 },
	{ produto: "microondas", categoria: "eletrodomestico", valor: 933.42 },
	{ produto: "liquidificador", categoria: "eletrodomestico", valor: 187.24 },
	{ produto: "xiaomi", categoria: "smartphone", valor: 1375.66 },
	{ produto: "iphone", categoria: "smartphone", valor: 8432.92 },
	{ produto: "samsung", categoria: "smartphone", valor: 4221.44 },
	{ produto: "lg", categoria: "smartphone", valor: 1224.88 },
	{ produto: "sofa", categoria: "moveis", valor: 3745.61 },
	{ produto: "mesa", categoria: "moveis", valor: 3111.82 },
	{ produto: "cadeira", categoria: "moveis", valor: 329.41 }
];

let maiorValor = 0;
let produtoMaiorValor = {};

list.forEach(product => {
  if(product.valor > maiorValor) {
    maiorValor = product.valor
    produtoMaiorValor = product
  }
});

console.log(produtoMaiorValor.produto);
