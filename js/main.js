var paciente = document.querySelectorAll(".paciente");


for (var i = 0; i < paciente.length; i++) {

    var menssagemErro = document.querySelector("#menssagem-erro");

    var tdPeso = paciente[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
   
    var imc = calculaIMC(altura, peso);

    var imcTd = paciente[i].querySelector(".info-imc");
    
    imcTd.textContent = imc;
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    

    if(!pesoEhValido){
        pesoEhValido = false;
        imcTd.textContent = "Peso inválido";
        paciente[i].classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        alturaEhValida = false;
        imcTd.textContent = "Altura inválida";
        paciente[i].classList.add("paciente-invalido");
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = peso/(altura*altura);
       
    
    }
    
    if(!alturaEhValida && !pesoEhValido){
        imcTd.textContent = "Altura e peso inválidos";
        paciente[i].style.backgroundColor = "lightcoral";
    }

}

    function validaPeso(peso) {
        if(peso > 5 && peso <= 200){
            return true;
        } else {
            return false
        }
    }

    function validaAltura(altura) {
        if (altura>0 && altura<2.5) {
            return true;
        } else {
            return false}
        
    }


function calculaIMC(altura, peso) {
    var imc = 0
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}



//cada paciente é uma TR portando vou usar um create element para cirar TR 