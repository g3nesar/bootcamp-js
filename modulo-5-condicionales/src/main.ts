import './style.css';

// Variables
const puntuacionActual = document.querySelector('.puntuacion') as HTMLDivElement | null;
const botonPedirCarta = document.querySelector('.pedirCarta') as HTMLButtonElement | null;
const botonMePlanto = document.querySelector('.mePlanto') as HTMLButtonElement | null;
const botonSimular = document.querySelector('.simular') as HTMLButtonElement | null;
const botonNuevaPartida = document.querySelector('.nuevaPartida') as HTMLButtonElement | null;
const imagenCarta = document.querySelector('.carta') as HTMLImageElement | null;


if (!puntuacionActual || !botonPedirCarta || !botonMePlanto || !botonSimular || !botonNuevaPartida || !imagenCarta) {
  console.error('Error! No se encontraron todos los elementos del DOM');
  alert('Hay un error en el sistema, por favor contactar con el administrador');
} else {
  puntuacionActual.innerHTML = "0";

  // Funcion para generar una carta nueva
  const dameCarta = (): void => {
    const generarNuevaCarta = (): number => Math.floor(Math.random() * 10) + 1;
    let nuevaCarta = generarNuevaCarta();
    if (nuevaCarta > 7) {
      nuevaCarta = nuevaCarta + 2;
      muestraCarta(nuevaCarta);
      muestraPuntuacion(nuevaCarta);
    } else {
      muestraCarta(nuevaCarta);
      muestraPuntuacion(nuevaCarta);
    }
  };

  // Funcion para mostrar la puntuacion en el frontend
  const muestraPuntuacion = (cartaPedida: number): void => {
    if (cartaPedida > 7) {
      cartaPedida = 0.5;
    }
    let puntuacionUsuario = parseFloat(puntuacionActual.innerHTML) + cartaPedida;
    puntuacionActual.innerHTML = String(puntuacionUsuario);
    if (puntuacionUsuario > 7.5) {
      botonPedirCarta.disabled = true;
      alert("Lo siento, tu puntaje es mayor al objetivo. Comienza una nueva partida.");
    }
  };

  // Funcion para mostrar la imagen de la carta
  const muestraCarta = (carta: number): void => {
    switch (carta) {
      case 1:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
      case 2:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
      case 3:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
      case 4:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
      case 5:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
      case 6:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
      case 7:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
      case 10:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
      case 11:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
      case 12:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
      default:
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
  };

  //Evaluar Puntuacion

  const evaluarPuntuacion = () => {
    let puntos = parseFloat(puntuacionActual.innerHTML);
    if (puntos === 7.5) {
      alert("¡ Lo has clavado! ¡Enhorabuena!");
    } else if (puntos <= 4) {
      alert("Has sido muy conservador");
    } else if (puntos === 5) {
      alert("Te ha entrado el canguelo eh?");
    } else if (puntos >= 6 || puntos <= 7) {
      alert("Casi casi...");
    }
  }

  botonPedirCarta.addEventListener('click', () => {
    dameCarta();
  });

  botonMePlanto.addEventListener('click', () => {
    botonPedirCarta.disabled = true;
    evaluarPuntuacion();
  });

  botonNuevaPartida.addEventListener('click', () => {
    imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    botonPedirCarta.disabled = false;
    puntuacionActual.innerHTML = "0";
    botonSimular.disabled = false;
  });

  botonSimular.addEventListener('click', () => {
    let final = false;
    do {
      dameCarta();
      let puntosSimulacion = parseFloat(puntuacionActual.innerHTML);
      if (puntosSimulacion > 7.5) {
        final = true;
      }
    } while (final == false);
    alert('Ha terminado la simulacion.');
    botonSimular.disabled = true;
  });

}


// EJERCICIO EN CLASE 

// // GET DOM ELEMENTS:
// const objetoNumeroUsuario = document.querySelector('#userNumber') as HTMLInputElement | null;
// const objetoResultado = document.querySelector('.resultado') as HTMLDivElement | null;
// const objetoBoton = document.querySelector('#checkNumber') as HTMLButtonElement | null;

// // CHECKING IF DOM ELEMENTS EXIST AND GETTING THE USER NUMBER
// if (!objetoNumeroUsuario || !objetoResultado || !objetoBoton) {
//   console.error("Error No se encontraron todos los elemtentos del DOM");
//   alert("Hay un Error 44 Por favor contactar al administrador");
// } else {

//   // Generate Computer Number
//   const numeroComputadora = (): number => Math.floor(Math.random() * 100);
//   let numComputadora = numeroComputadora();
//   console.log(`Numero de la computadora: ${numComputadora}`);

//   // Getting the user number
//   const obtenerNumeroUsuario = (): number | "Error" => {
//     const numero = parseInt(objetoNumeroUsuario.value);
//     return isNaN(numero) ? "Error" : numero;
//   }

//   // Compare Numbers
//   const comparacion = (): void => {
//     const numeroUsuario = obtenerNumeroUsuario();
//     console.log(`El numero del usuario es: ${numeroUsuario}`);
//     if (numeroUsuario === "Error") {
//       objetoResultado.innerHTML = "Hubo un error por favor revisa si introdujiste bien el resultado";
//       return;
//     }

//     objetoResultado.innerHTML = numeroUsuario === numComputadora ? "Has adivinado el numero" : "Fallaste, vuelve a intentarlo";
//   };

//   objetoBoton.addEventListener('click', () => {
//     comparacion();
//   })
// }


