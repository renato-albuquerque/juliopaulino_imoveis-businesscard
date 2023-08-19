// function

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Júlio Paulino Imóveis - Cartão de Visita Digital',
			text: 'Aluguel, Compra, Venda e Atividades Afins.',
			url: ''
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}