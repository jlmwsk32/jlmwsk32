function cambiarNombre() {

    var nombre = prompt("Ingresa tu nombre:");
    var mensaje = "Hola " + nombre;
    document.getElementById("mensaje").textContent = mensaje;

}