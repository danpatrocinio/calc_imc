import calculaImc from './calcula_imc'

document.getElementById('calcular').onclick = function () {
	const nome = document.getElementById('nome').value || 'amigo'
	const peso = document.getElementById('peso').value
	const altura = document.getElementById('altura').value
	const imc = calculaImc(peso, altura)
	document.getElementById('resultado')
		.innerText = !peso || !altura ? '' :	'Olá ' + nome + ', seu IMC é: ' + imc
}

document.getElementById('limpar').onclick = function () {
	document.getElementById('nome').value = ''
	document.getElementById('peso').value = undefined
	document.getElementById('altura').value = undefined
	document.getElementById('resultado').innerText = ''
	document.getElementById('nome').focus();
}