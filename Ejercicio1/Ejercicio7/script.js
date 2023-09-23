let sumando2 = 0;
let acumul = 0;
let sumando = 0;

function sumar()
{
    sumando = document.getElementById("txtBox").value

    acumul = parseint(sumando) + parseint(acumul);

    document.getElementById("txtBox").value = "";

}

function restar()
{
    sumando = document.getElementById("txtBox").value

    acumul = parseint(sumando) - parseint(acumul);

    document.getElementById("txtBox").value = "";

}

function multiplicar()
{
    sumando = document.getElementById("txtBox").value

    acumul = parseint(sumando) * parseint(acumul);

    document.getElementById("txtBox").value = "";

}

function dividir()
{
    sumando = document.getElementById("txtBox").value

    acumul = parseint(sumando) / parseint(acumul);

    document.getElementById("txtBox").value = "";

}

function calcular()
{
    document.getElementById("txtBox").value = acumul;
}


function borrar(){
    sumando2 = 0;
    sumando = 0;
    acumul = 0;
    document.getElementById("txtBox").value = ""
}

function añadir1(){
    sumando2 = 1+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir2(){
    sumando2 = 2+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir3(){
    sumando2 = 3+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir4(){
    sumando2 = 4+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir5(){
    sumando2 = 5+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir6(){
    sumando2 = 6+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir7(){
    sumando2 = 7+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir8(){
    sumando2 = 8+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}
function añadir9(){
    sumando2 = 9+sumando2*10
    document.getElementById('txtBox').value = sumando2;
}

