var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", menssagem);

function menssagem(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

   
    var pacienteobj = obtemPacienteFormulario(form);

    

    //cria a tr e a td do paciente
    
    if (!validaPaciente(pacienteobj)) {
        console.log("paciente inválido");
        menssagemErro.textContent = "Paciente Inválido " + motivo;
        form.reset();
        return ;
    }

    console.log(pacienteobj.peso);


    //Adicionando o paciente na tabela
    
    adicionaPacienteNaTabele(pacienteobj)
    form.reset();
    //função do form que reseta os campos

    

// o form inteiro foi selecionado atravez do id e jogao dentro de uma variavel
// só assim ent conseguimos acessar os campos desse form atravez dessa variavel

//para inputs usamos values
// para tags usamos textContent

    }


    function adicionaPacienteNaTabele(pacienteobj){
        var pacienteTr = montaTr(pacienteobj);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);

    }

    function validaPaciente(pacienteobj) {
        if(!validaPeso(pacienteobj.peso) && !validaAltura(pacienteobj.altura)){
            motivo = "(Peso e altura)";
            return false;
        }
        
        if(!validaPeso(pacienteobj.peso) && validaAltura(pacienteobj.altura)){
            motivo = "(Peso)";
            return false
        }

        if (validaPeso(pacienteobj.peso) && !validaAltura(pacienteobj.altura)) {
            motivo = "(Altura)";
            return false
        }

        return true;        
    }


    

    



    