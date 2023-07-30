var botaoBuscar = document.querySelector("#botao-buscar");
botaoBuscar.addEventListener("click", function(){
    //objeto do javascript capaz de fazer requisições http
    
    var xhr = new XMLHttpRequest(); 

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText
        var pacientes = JSON.parse(resposta);


        pacientes.forEach(function(pacienteobj){
            adicionaPacienteNaTabele(pacienteobj)
        })
    });
    xhr.send();
});