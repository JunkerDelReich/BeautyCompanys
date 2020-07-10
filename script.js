

      function validate() {            
        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var telefone = document.getElementById("telefone");
        var mensagem = document.getElementById("mensagem");
     

         if( nome.value == "" ) {
            alert( "Informe o nome, por favor!" );
            nome.focus() ;
            return false;
         }
         if( email.value == "" ) {
            alert( "Informe o email, por favor!" );
            email.focus() ;
            return false;
         }
         if( telefone.value == "")  {            
            alert( "Informe o telefone, por favor!" );
            email.focus() ;
            return false;
         }
         if( mensagem.value == "" ) {
            alert( "Informe a mensagem, por favor!" );
            mensagem.focus() ;
            return false;
         }

         alert( "Validação realizada com sucesso!" );
       
         return true ;
      }

      function clear(){
        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var telefone = document.getElementById("telefone");
        var mensagem = document.getElementById("mensagem");

        nome.value = "";
        email.value = "";
        telefone.value = "";
        mensagem.value = "";
        alert( "Campos limpos com sucesso" );
      }

