function validacao(){
    var i, caixa=false, erro=false;
    if(document.fCadastro.nome.value==""){
        alert("Por favor, preencha seu nome!");
        document.fCadastro.nome.focus();
    }
    if(document.fCadastro.idade.value==""){
        alert("Por favor, preencha sua idade!");
        document.fCadastro.idade.focus();
    }
    if(!document.fCadastro.sexo[0].checked && !document.fCadastro.sexo[1].checked){
        alert("Por favor, informe seu sexo!");
    }
    for(i=0; i<3; i++){
        if(document.fCadastro.esporte[i].checked){
            caixa=true;
        }
    }
    if(caixa==false){
        alert("Por favor, informe, pelo menos, um esporte!");
    }
    if(document.fCadastro.estacao.selectedIndex==0){
        alert("Por favor, informa a estação favorita do ano!");
    }
    if(erro==false){
        document.fCadastro.submit();
    }
}