var calcula = require('./calcula')


document.getElementById('calcular').onclick = function () {
	var nome = document.getElementById('nome').value
	var peso = document.getElementById('peso').value
	var altura = document.getElementById('altura').value
	var imc = calcula(nome, peso, altura)
	document.getElementById('resultado').innerText = 'Olá ' + nome + ', seu IMC é: ' + imc;
}