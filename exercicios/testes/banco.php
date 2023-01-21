<?php

$banco = new mysqli("localhost","root", "","testes");
if($banco->connect_errno){
    echo"houve um Erro  $banco->erro";
}else{
    echo "Conexão fei ta com sucesso!";
}
?>