console.log("Hola")

for(let x=0; x < 10; x++){
    console.log(x)
}

let array1 = [0,1,2,3]
for( let x=0; x<4; x++){
    console.log(array1[x])
}

for(let x=0; x<array1.length; x++){
    console.log(array1[x])
}

function saludar_con_parametros (nombre){
    return ("Hola " + nombre)
}
let nombre_usuario = prompt("Ingrese su nombre: ")
function alertar (valor) {
    alert (valor)
}

alertar (saludar_con_parametros(nombre_usuario))

function procesarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
  
    // Obtener los valores ingresados por el cliente
    const nombre = document.getElementById('nombre').value;
    const plan = document.getElementById('plan').value;
    const deporte = document.getElementById('deporte').value;
  
    // Verificar si se llenaron todos los campos
    if (!nombre || !plan || !deporte) {
      mostrarMensaje('Necesitamos que llenes los datos para que puedas inscribirte correctamente');
      return false; // Detener el envío del formulario
    }
  
    // Generar el mensaje de inscripción exitosa
    let planMensaje = '';
    if (plan === 'plan1') {
      planMensaje = 'básico';
    } else if (plan === 'plan2') {
      planMensaje = 'premium';
    }
  
    const mensajeInscripcion = `Gracias ${nombre}, por inscribirte al plan ${planMensaje}.`;
    const mensajeDeporte = `Tu inscripción a ${deporte} se ha realizado con éxito!`;
    
    mostrarMensaje(mensajeInscripcion);
    mostrarMensaje(mensajeDeporte);
  
    return false; // Evitar el envío del formulario
}
  
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    document.body.appendChild(mensajeDiv);
}
  