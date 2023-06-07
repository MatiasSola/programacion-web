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