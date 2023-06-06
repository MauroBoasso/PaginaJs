function invertir(){
    let texto = new String ();     
    let resul = "";
    texto = document.datos.text.value;
    
    
    for(let i=0,n=texto.length;i<n;i++){
        if(texto[i] == texto[i].toLowerCase()){
            resul += texto[i].toUpperCase();
        }
        else{
            resul += texto[i].toLowerCase();
        }
    }
    
    document.datos.textsalida.value = resul;
}