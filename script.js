let dinero = 100000;
 
function perforar() {

let ley = (Math.random() * 20).toFixed(2);

let exito = Math.random();
 
if (exito > 0.65) {

document.getElementById("resultado").innerHTML =
"✅ Veta encontrada<br>Ley: "
+ ley +
" g/t Au";
 
dinero += Math.round(ley * 1000);
 
} else {
 
document.getElementById("resultado").innerHTML =
"❌ Sin mineralización";

dinero -= 5000;
}
 
document.getElementById("dinero").innerText =
dinero;
}
