function mostraFruta(){
    var indice, valor;
    indice = document.fExemplo.fruta.selectedIndex;
    valor = document.fExemplo.fruta.value;
    document.write("Fruta selecionada: " + valor);
    document.write("<br>Índice da fruta selecionada: " + indice);
}