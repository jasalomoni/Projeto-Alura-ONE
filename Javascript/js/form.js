var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
	event.preventDefault();

	//Extrai os valores dos pacientes do formulário
	var formulario = document.querySelector("#form-adiciona");
	var paciente = extraiValoresFormulario(formulario);

	//Valida formulário
	var erros = validaPaciente(paciente);

	if(erros.length > 0) {

		exibeMensagensErro(erros);
		return;
	}
	
	//Adiciona paciente na tabela 
	adicionaPacienteTabela(paciente);
	
	formulario.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});

function extraiValoresFormulario(formulario) {

	var paciente = {

		nome: formulario.nome.value,
		peso: formulario.peso.value,
		altura: formulario.altura.value,
		gordura: formulario.gordura.value,
		imc: calculaImc(formulario.peso.value, formulario.altura.value)
	}
	return paciente;
}

function montaTr(paciente) {

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {

	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {

	var erros = [];

	if(!validaPeso(paciente.peso)) {
		erros.push("Peso inválido!");
	}

	if(!validaAltura(paciente.altura)) {
		erros.push("Altura inválida!");
	}

	if(paciente.peso.length == 0) {
		erros.push("Peso não informado");
	}

	if(paciente.altura.length == 0) {
		erros.push("Altura não informada");
	}

	if(paciente.nome.length == 0) {
		erros.push("Nome não informado");
	}

	if(paciente.gordura.length == 0) {
		erros.push("Gordura não informada");
	}
	return erros;
}

function exibeMensagensErro(erros) {

	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(mensagem) {
		var li = document.createElement("li");
		li.textContent = mensagem;
		ul.appendChild(li);
	});
}

function adicionaPacienteTabela(paciente) {

	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
}

