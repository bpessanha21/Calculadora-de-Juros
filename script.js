montante = principal * (1 + (taxa/100)) ^ periodo

function calcularJuros() {
	// Obter os valores de entrada
	let principal = document.getElementById("principal").value;
	let taxa = document.getElementById("taxa").value;
	let periodo = document.getElementById("periodo").value;

	// Converter a taxa de juros em decimal
	taxa = taxa / 100;

	// Calcular o montante
	let montante = principal * Math.pow(1 + taxa, periodo);

	// Exibir o resultado
	document.getElementById("resultado").value = montante.toFixed(2);
}