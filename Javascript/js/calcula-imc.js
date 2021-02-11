
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {	

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var infoImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if(!pesoValido) {
		console.log("Peso inválido!");
		infoImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
		pesoValido = false;
	}

	if(!alturaValida) {
		console.log("Altura inválida!");
		infoImc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
		alturaValida = false;
	}	

	if(pesoValido && alturaValida) {
		var imc = calculaImc(peso, altura);
		infoImc.textContent = imc;
	}
}

function validaPeso(peso) {

	if(peso > 0 && peso <= 1000) {
		return true;
	}else {
		return false;
	}
}

function validaAltura(altura) {

	if(altura > 0 && altura <= 3.00) {
		return true;
	}else {
		return false;
	}
}

function calculaImc(peso, altura) {

	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}











//console.log(infoImc);
		