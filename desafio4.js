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

].filter(produto => (
  produto.categoria == 'eletrodomestico'
)).map(produto => {
  let desconto = 0;

  if( produto.valor > 1000) {
    desconto = produto.valor - ((produto.valor * 10) / 1000);
  }

  if( produto.valor > 500) {
    desconto = produto.valor - ((produto.valor * 7) / 1000);
  }

  if( produto.valor < 500) {
    desconto = produto.valor - ((produto.valor * 5) / 1000);
  }

  return { ...produto, valor: desconto.toFixed(2) };
})

console.log(list);



