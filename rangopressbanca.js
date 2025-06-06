function calcular(){
    var peso = parseFloat(document.getElementById("peso").value);
    var pr = parseFloat(document.getElementById("pr").value);
    var rango = pr/peso;
    var textoRango = "";
    var imagenSrc = "";

    if (rango<0.7 && rango>0) {
    document.getElementById("rango").value ="bronce";
    }
    if (rango<0.9 && rango>=0.7) {
        document.getElementById("rango").value ="plata"
    }
    if (rango<1.1 && rango>0.9) {
        document.getElementById("rango").value ="oro"
        
        imagenSrc = "images/oro.jpg";
        
    }
    
     if (rango<1.3 && rango>=1.1) {
        document.getElementById("rango").value ="platino"

    }
  if (rango<1.5 && rango>=1.3) {
        document.getElementById("rango").value ="diamante"
    }
     if (rango<1.7 && rango>=1.5) {
        document.getElementById("rango").value ="elite"
    }
     if (rango>=1.7) {
        document.getElementById("rango").value ="unreal"
    }
}