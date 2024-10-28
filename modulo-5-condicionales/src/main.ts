import './style.css';

// Variables
const puntuacion = document.querySelector('.puntuacion') as HTMLDivElement | null;
const pedirCarta = document.querySelector('.pedirCarta') as HTMLButtonElement | null;
const imagenCarta = document.querySelector('.carta') as HTMLImageElement | null;


if (!puntuacion || !pedirCarta || !imagenCarta) {
  console.error('Error! No se encontraron todos los elementos del DOM');
  alert('Hay un error en el sistema, por favor contactar con el administrador');
} else {
  let puntuacionUsuario: number = 0;
  const muestraPuntuacion = () => {

  };

  const dameCarta = (): number => {
    const generarNuevaCarta = (): number => Math.floor(Math.random() * 10);
    let nuevaCarta = generarNuevaCarta();
    if (nuevaCarta > 7) {
      nuevaCarta = nuevaCarta + 2;
      return nuevaCarta;
    } else {
      return nuevaCarta;
    }
  };


  const muestraCarta = (carta: number): void => {
    let cartaPedida: number = dameCarta();
    switch (cartaPedida) {
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
        imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
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

}




// 1: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg
// 2: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg
// 3: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg
// 4: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg
// 5: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg
// 6: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg
// 7: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg
// Sota: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg
// Caballo: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg
// Rey: https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg



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


