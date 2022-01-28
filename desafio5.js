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
]


const eletrodomestico = list.filter(produto  => (
  produto.categoria == 'eletrodomestico'
));

const smartphone = list.filter(produto =>{
  return produto.categoria == 'smartphone'
});

const moveis = list.filter(produto =>{
  return produto.categoria == 'moveis'
});

const mediaEletrodomestico = eletrodomestico.reduce((accumulator, product) => {
  return accumulator + (product.valor / eletrodomestico.length );
}, 0);

const mediaSmartphone = smartphone.reduce((accumulator, product) => {
  return accumulator + (product.valor / smartphone.length );
}, 0);

const mediaMoveis = moveis.reduce((accumulator, product) => {
  return accumulator + (product.valor / moveis.length );
}, 0);


console.log(
  `
    Média Eletrodomésticos: ${mediaEletrodomestico.toFixed(2)}
    Média Smartphones: ${mediaSmartphone.toFixed(2)}
    Média Móveis: ${mediaMoveis.toFixed(2)}
  `
);
