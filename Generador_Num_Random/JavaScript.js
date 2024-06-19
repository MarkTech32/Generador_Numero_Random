const Boton = document.getElementById("Boton");
const Label1 = document.getElementById("Label1");
let NumeroRandom;

Boton.onclick = function(){
    let min = parseInt(document.getElementById("miNumero1").value);
    let max = parseInt(document.getElementById("miNumero2").value);
    NumeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    Label1.textContent = NumeroRandom;
}