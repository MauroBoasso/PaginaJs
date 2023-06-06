
//funcion para calcular el area de un paralelograma
function paralelogramo(base, altura){
    let area;
    area = base * altura;    
    return area;
}
//funcion para calcular el area de un rombo
function rombo(diagonal1,diagonal2){
    let area;
    area = (diagonal1 * diagonal2)/2;
   return area;
}
//funcion para calcular el area de un trapecio
function trapecio(base1, base2, altura){
    let area;
    area = ((base1 + base2)*altura)/2;
    return area;
}

// segun la solicitud del usuario se asigna una de las funciones mencionadas anteriormente
function calcular(){
    let dato = document.dato.select.value; 
    
    if(dato != "null"){
        if(dato == "value1"){
            let b = window.prompt("Ingrese el valor de la base: ",""); 
            let h = window.prompt("Ingrese el valor de la altura: ","");
            if(isNaN(b)||isNaN(h)){
                document.getElementById("result").innerHTML = "<div class='resultado'><h3> Error de sintaxis, evite ingresar valores que no sean numericos </h3></div> ";
            }
            else{
                document.getElementById("result").innerHTML ="<div class='resultado'><h3> Resultado: " + paralelogramo(b,h) + " Mts2 </h3></div>";
            }
        }
        if(dato == "value2"){
            let d1 = window.prompt("Ingrese el valor de la primera diagonal: "); 
            let d2 = window.prompt("Ingrese el valor de la segunda diagonal: ");
            if(isNaN(d1)||isNaN(d2)){
                document.getElementById("result").innerHTML = "<div class='resultado'><h3> Error de sintaxis, evite ingresar valores que no sean numericos </h3></div> ";
            }
            else{
                document.getElementById("result").innerHTML = "<div class='resultado'><h3> Resultado: " + rombo(d1,d2) + " Mts2 </h3></div>";
            }
        }
        if(dato == "value3"){
            let b1 = window.prompt("Ingrese el valor de la base superior: ",""); 
            let b2 = window.prompt("Ingrese el valor de la base inferior: ","");
            let h  = window.prompt("Ingrese el valor de la Altura: ");
            if(isNaN(b1)||isNaN(b2)&&isNaN(h)){
                document.getElementById("result").innerHTML = "<div class='resultado'><h3> Error de sintaxis, evite ingresar valores que no sean numericos </h3></div> ";
            }
            else{
                document.getElementById("result").innerHTML ="<div class='resultado'><h3> Resultado: " + trapecio(b1,b2,h) + " Mts2 </h3></div>";
            }    
        }
    }
    else{
        document.getElementById("result").innerHTML = "<div class='resultado'><h3> Ingrese un cuadrilatero para calcular </h3></div>";
    }
    return 0;
}

document.getElementById("iniciar").onclick = calcular;