// function

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Júlio Paulino Imóveis - Cartão de Visita Digital',
			text: 'Aluguel, Compra, Venda e Atividades Afins.',
			url: 'https://cartaodevisita-juliopaulinoimoveis.vercel.app/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}