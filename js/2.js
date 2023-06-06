
function buscar() {
    let texto = new String();
    let dato,contador=0;

    texto = document.datos.text.value;
    dato = document.datos.caracter.value;

    dato = dato[0];

    for(let i=0, n = texto.length; i<n; i++){

        if(texto[i].toLowerCase() == dato.toLowerCase()){
            contador++;
        }
        
    }
    document.getElementById("result").innerHTML = dato.toUpperCase(); 
    document.datos.resultado.value = contador; 
}
