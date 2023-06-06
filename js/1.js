// lista con todos los años y signos zodiacales correspondientes
let lista = {
    "1924":"Rata","1925":"Buey","1926":"Tigre","1927":"Conejo","1928":"Dragón","1929":"Serpiente",
    "1930":"Caballo","1931":"Cabra","1932":"Mono","1933":"Gallo","1934":"Perro","1935":"Cerdo",
    "1936":"Rata","1937":"Buey","1938":"Tigre","1939":"Conejo","1940":"Dragón","1941":"Serpiente",
    "1942":"Caballo","1943":"Cabra","1944":"Mono","1945":"Gallo","1946":"Perro","1947":"Cerdo","1948":"Rata","1949":"Buey",
    "1950":"Tigre","1951":"Conejo","1952":"Dragón","1953":"Serpiente","1954":"Caballo","1955":"Cabra",
    "1956":"Mono","1957":"Gallo","1958":"Perro","1959":"Cerdo",
    "1960":"Rata","1961":"Buey","1962":"Tigre","1963":"Conejo","1964":"Dragón","1965":"Serpiente",
    "1966":"Caballo","1967":"Cabra","1968":"Mono","1969":"Gallo","1970":"Perro","1971":"Cerdo","1972":"Rata",
    "1973":"Buey","1974":"Tigre","1975":"Conejo","1976":"Dragón","1977":"Serpiente","1978":"Caballo","1979":"Cabra",
    "1980":"Mono","1981":"Gallo","1982":"Perro","1983":"Cerdo","1984":"Rata","1985":"Buey",
    "1986":"Tigre","1987":"Conejo","1988":"Dragón","1989":"Serpiente","1990":"Caballo","1991":"Cabra","1992":"Mono",
    "1993":"Gallo","1994":"Perro","1995":"Cerdo","1996":"Rata","1997":"Buey","1998":"Tigre","1999":"Conejo",
    "2000":"Dragón","2001":"Serpiente","2002":"Caballo","2003":"Cabra","2004":"Mono","2005":"Gallo",
    "2006":"Perro","2007":"Cerdo","2008":"Rata","2009":"Buey","2010":"Tigre","2011":"Conejo","2012":"Dragón",
    "2013":"Serpiente","2014":"Caballo","2015":"Cabra","2016":"Mono","2017":"Gallo","2018":"Perro","2019":"Cerdo",
    "2020":"Rata","2021":"Buey","2022":"Tigre","2023":"Conejo","2024":"Dragón","2025":"Serpiente",
    "2026":"Caballo","2027":"Cabra","2028":"Mono","2029":"Gallo","2030":"Perro","2031":"Cerdo"
}

function mostrar() {
    let nombre, date, valor, valor2, elemento;
    //tomo los valores de los input:
    nombre = document.datos.name.value;
    date = document.datos.fecha.value;
    // solo necesito el año de la fecha: 
    date = date[0] + date[1] + date[2] + date[3];

    //=====================================================
    // busqueda de signo del zodiaco chino

    //si el año esta dentro de la lista que haga la busqueda
    if(date>=1924 && date<=2031){ //si esta dentro de los parametros se busca el valor correspondiente al año
        valor = lista[date];
        document.getElementById("resultado").innerHTML = ("<div class='result1'> <h3> " + nombre + " tu signo del Zodiaco Chino es: " + valor + " </h3> </div> ");

        valor2 = date[3];
        valor2 = parseInt(valor2);
        //document.getElementById("resultado2").innerHTML = valor2;
        
        switch (valor2) {
            case 0:
                elemento = "Metal";
                break;
            case 1:
                elemento = "Metal";
                break;
            case 2:
                elemento = "Agua";
                break;            
            case 3:
                elemento = "Agua";
                break;
            case 4:
                elemento = "Madera";
                break;
            case 5:
                elemento = "Madera";
                break;  
            case 6:
                elemento = "Fuego";
                break;  
            case 7:
                elemento = "Fuego";
                break;
            case 8:
                elemento = "Tierra";
                break;  
            case 9:
                elemento = "Tierra";
                break;            
        }
        
        document.getElementById("resultado2").innerHTML = ("<div class='result2'> <h3> Y tu elemento es: " + elemento + " </h3> </div> ");
        valor = valor.toLowerCase();
        if(valor == "dragón"){
            valor = "dragon";
        }
        document.getElementById("frame").innerHTML = ("<iframe src='https://www.viaje-a-china.com/zodiacos-chinos/"+valor+".asp' frameborder='2' width='100%' height='400'></iframe>");
    }
    else{ // de lo contrario se envia un mensaje.
        document.getElementById("resultado").innerHTML = ("<div class='result3'> <h3> La fecha ingresada no es valida. lo sentimos :( </h3>")
    }
    return 0;
}

