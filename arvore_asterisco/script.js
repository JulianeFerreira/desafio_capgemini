//Questão 01
function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

for (var linha = 1; linha <= 6; linha++) {
    for (var coluna = 1; coluna <= linha; coluna++) {
        document.write("*");
    }
    pulaLinha();
}