var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
   
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); 
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura"); 
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    
    
    if(!pesoEhValido){
        pesoEhValido = false;
        tdPeso.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEhValida){
        alturaEhValida = false;
        tdAltura.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida){
        tdImc.textContent = calculaImc(peso, altura);
    } else {
        imc.textContent = "Peso e/ou Altura Invalidos!";
    }
    
   
}

function calculaImc (peso, altura) {
    
    var imc = 0;   

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso (peso) {
    if(peso > 0 && peso < 900){
        return true;
    }
}
function validaAltura (altura) {
    if(altura > 0 && altura <= 3.00) {
        return true;
    }
}

