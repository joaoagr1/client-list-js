function montaTr(pacienteobj){
    //cria a tr e a td do paciente
   var pacienteTr = document.createElement("tr");
   
   pacienteTr.classList.add("paciente");  

   /* var nomeTd = document.createElement("td");
   nomeTd.classList.add("info-nome");
   nomeTd.textContent = pacienteobj.nome; */
     var nomeTd = montaTd(pacienteobj.nome, "info-nome");

   /* var pesoTd = document.createElement("td");
   pesoTd.classList.add("info-peso");
   pesoTd.textContent = pacienteobj.peso; */
     var pesoTd = montaTd(pacienteobj.peso, "info-peso")


   /* var alturaTd= document.createElement("td");
   alturaTd.classList.add("info-altura");
   alturaTd.textContent = pacienteobj.altura; */
      var alturaTd = montaTd(pacienteobj.altura, "info-altura")


  /*  var gorduraTd= document.createElement("td");
   gorduraTd.classList.add("info-gordura");
   gorduraTd.textContent = pacienteobj.gordura; */
      var gorduraTd = montaTd(pacienteobj.gordura, "info-gordura")


  /*  var imcTd= document.createElement("td");
   imcTd.classList.add("info-mc");
   imcTd.textContent = pacienteobj.imc; */
     var imcTd = montaTd(pacienteobj.imc, "info-imc")
   
   
   
   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);

   return pacienteTr;
}




 
function obtemPacienteFormulario(form){
    //extrai informações do form  
    
    var pacienteobj = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.altura.value,form.peso.value)}

        return pacienteobj;
    }

    function calculaIMC(altura, peso) {
        var imc = 0
        imc = peso/(altura*altura);
        return imc.toFixed(2);
    }

    function montaTd(dado,classe) {
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }