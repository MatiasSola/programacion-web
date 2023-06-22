// console.log("Hola")

// for(let x=0; x < 10; x++){
//     console.log(x)
// }

// let array1 = [0,1,2,3]
// for( let x=0; x<4; x++){
//     console.log(array1[x])
// }

// for(let x=0; x<array1.length; x++){
//     console.log(array1[x])
// }

// function saludar_con_parametros (nombre){
//     return ("Hola " + nombre)
// }
// let nombre_usuario = prompt("Ingrese su nombre: ")
// function alertar (valor) {
//     alert (valor)
// }

// alertar (saludar_con_parametros(nombre_usuario))

function procesarFormulario(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var deporte = document.getElementById("deporte").value;
  var plan = document.getElementById("plan").value;

  // Validar los valores del formulario
  if (nombre === "" || email === "" || deporte === "" || plan === "") {
      alert("Por favor, completa todos los campos del formulario.");
      return false;
  }

  // Asignar nombres personalizados a los planes
  var planNombre = "";
  if (plan === "plan1") {
      planNombre = "Plan Básico";
  } else if (plan === "plan2") {
      planNombre = "Plan Premium";
  }

  
  var deporteNombre = "";
  switch (deporte) {
      case "boxeo":
          deporteNombre = "Boxeo";
          break;
      case "esgrima":
          deporteNombre = "Esgrima";
          break;
      case "kickboxing":
          deporteNombre = "Kickboxing";
          break;
      case "judo":
          deporteNombre = "Judo";
          break;
      case "karate":
          deporteNombre = "Karate";
          break;
      case "muaythai":
          deporteNombre = "Muay Thai";
          break;
      default:
          deporteNombre = "Deporte desconocido";
          break;
  }
  // Mostrar mensaje de éxito
  var mensaje = "¡Gracias por inscribirte!\n\n";
  mensaje += "Nombre: " + nombre + "\n";
  mensaje += "Email: " + email + "\n";
  mensaje += "Deporte: " + deporte + "\n";
  mensaje += "Plan: " + planNombre + "\n";
  alert(mensaje);

  // Limpiar el formulario
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("deporte").selectedIndex = 0;
  document.getElementById("plan").selectedIndex = 0;

  return false;
}
