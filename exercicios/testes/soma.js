



function soma(){ 
    let num1 =document.getElementById('num1').value/*duas fomas diferente */
    let  num2 = document.querySelector('#num2').value
    let resultado = parseInt(num1) + parseInt(num2)
    /*document.querySelector("#res").innerHTML=resultado */
    document.getElementById("res").innerHTML=resultado
}