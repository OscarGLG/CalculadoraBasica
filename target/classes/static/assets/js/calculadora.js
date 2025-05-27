// solo se ejecuta esta linea
alert("Hola mundo de la programación en javascript");

//las funciones tienen que mandarse llamar para que funcionen
function hola(){
    alert("No se muestra hasta que se mande llamar");
}

function sumar(){
    numero_1=document.getElementById("n1").value;
    numero_2=document.getElementById("n2").value;
    resultado=parseInt(numero_1)+parseInt(numero_2);
    alert("Suma:"+resultado);
}

function restar(){
    numero_1=document.getElementById("n1").value;
    numero_2=document.getElementById("n2").value;
    resultado=parseInt(numero_1)-parseInt(numero_2);
    alert("Resta: "+resultado);
}

function multiplicar(){
    numero_1=document.getElementById("n1").value;
    numero_2=document.getElementById("n2").value;
    resultado=parseInt(numero_1)*parseInt(numero_2);
    alert("Multiplicación: "+resultado);
}

function dividir(){
    numero_1=document.getElementById("n1").value;
    numero_2=document.getElementById("n2").value;
    resultado=parseInt(numero_1)/parseInt(numero_2);
    alert("División: "+resultado);
}
