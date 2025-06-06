function calcular(){
    var peso = parseFloat(document.getElementById("peso").value);
    var pr = parseFloat(document.getElementById("pr").value);
    var rango = pr/peso;
    var textoRango = "";
    var imagenSrc = "";

    if (rango<1.2 && rango>0) {
    document.getElementById("rango").value ="bronce";
    }
    if (rango<1.4 && rango>=1.2) {
        document.getElementById("rango").value ="plata"
    }
    if (rango<1.6 && rango>1.4) {
        document.getElementById("rango").value ="oro"
        
        imagenSrc = "images/oro.jpg";
        
    }
    
     if (rango<1.8 && rango>=1.6) {
        document.getElementById("rango").value ="platino"

    }
  if (rango<2.0 && rango>=1.8) {
        document.getElementById("rango").value ="diamante"
    }
     if (rango<2.2 && rango>=2.0) {
        document.getElementById("rango").value ="elite"
    }
     if (rango>=2.2) {
        document.getElementById("rango").value ="unreal"
    }
  
      var img = document.getElementById("imagenRango");
    if (imagenSrc !== "") {
        img.src = imagenSrc;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }

    
}