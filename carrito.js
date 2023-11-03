let canInCar = 1; 
let precio = 11000;
let total = canInCar*precio;
const codigo20 = "descveinte" 
function enviar() {
    let nomap = document.getElementById("nomap").value;
    let numtel = document.getElementById("numtel").value;
    let mail = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nomap !="" && numtel != "" && mail != "" && mensaje!=""){
          alert("El mensaje ha sido enviado");
    } else {
        alert("Debe completar todos los campos");
    }
};
function agregar() {
    alert ("Su producto ha sido agregado al carrito de compras")
    canInCar = 1;
}
function aumentarcantidad() {
    canInCar++;
    document.getElementById("cantidad").innerHTML = canInCar;
    total = precio*canInCar;
    document.getElementById("total").innerHTML = "$"+total;

}
function disminuircantidad() {
    if(canInCar > 0){
        canInCar--;
        document.getElementById("cantidad").innerHTML = canInCar;
        total = precio*canInCar;
        document.getElementById("total").innerHTML = "$"+total;
    }
    
}
function aplicarCodigo() {
    let codigocliente = document.getElementById("codigo").value
    if (codigo20 == codigocliente){
        let descuento = (20 * total / 100);
        let totalConDesc = total - descuento;
        document.getElementById("total").innerHTML = "$"+totalConDesc;
        document.getElementById("descuento").innerHTML = "-$"+descuento;
        let descuentoText = document.getElementById("descuentoText");
        descuentoText.removeAttribute("hidden");
    }
    else {
        alert("Su Cupón no es valido")
    }
}

function pagar (){
    if(total != 0 ){
        alert("Sera dirigido a la plataforma de pago")
    }
    else {
        alert("Su carrito de compras esta vacio")
    }
}