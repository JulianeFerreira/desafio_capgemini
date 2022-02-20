function verificaForcaSenha() {
    var numeros = /([0-9])/;
    var alfabetoa = /([a-z])/;
    var alfabetoA = /([A-Z])/;
    var caracteresEspeciais = /([!@#$%^&*()-+])/;

   if ($('#password').val().length < 6) {
       $('#password-status').html("<span style='color:red'>Fraca, insira no mínimo 6 caracteres</span>");
   } else {

   if($('#password').val().match(numeros) &&
        $('#password').val().match(alfabetoa) && 
        $('#password').val().match(alfabetoA) &&
        $('#password').val().match(caracteresEspeciais)) {
        $('#password-status').html("<span style='color:green'><b>Forte</b></span>");
       } else {
           $('#password-status').html("<span style='color:orange'>Média, insira um caracter especial</span>");
       }
   }
}


