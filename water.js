function calcular(){
    var peso = parseFloat(document.getElementById("peso").value);
    var result =peso*0.033
    var agua= result.toFixed(2);
    document.getElementById("agua").value = agua;
}