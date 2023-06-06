let min=0,max=5;

function numaleatorio(max, min){
    
    posibilidades = max - min;
    let aleatorio = Math.random() * (posibilidades+1);
   aleatorio = Math.trunc(aleatorio);
    return aleatorio + min;
}

function Aleatorio(){
    let = min=12,max=24;
    let posibilidades = max - min;
    let aux = numaleatorio(5,0); 
    let aleatorio = aux * (posibilidades + 1);
    aleatorio = (aleatorio/5.1);
    aleatorio = Math.trunc(aleatorio);
    document.getElementById("result").innerHTML = aleatorio + min;
}



