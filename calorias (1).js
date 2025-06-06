function calcular() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var edad = parseFloat(document.getElementById("edad").value);
    var opsexo=document.getElementById("opsexo").value;
    var op=document.getElementById("factor").value;
    var result;
    var calorias;

    /*variable sexo*/
      if(opsexo=="mujer"){
        result = 10*peso+6.25*altura-5*edad-166;
    }
      if(opsexo=="hombre"){
        result = 10*peso+6.25*altura-5*edad+5;
    }
    
    /*variable activity factor*/
    if(op=="sedentario"){
    calorias = result*1.2;
    }
     if(op=="ligero"){
    calorias = result*1.375;
    }
    if(op=="moderado"){
        calorias = result*1.55;
    }
    if(op=="intenso"){
        calorias = result*1.725;
    }
    if(op=="muyintenso"){
        calorias=result*1.9;
    }
  
let caloriasfinales = calorias.toFixed(0);
    document.getElementById("calorias").value = caloriasfinales;
    

}