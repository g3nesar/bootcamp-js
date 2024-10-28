import './style.css';
console.log("prueba");
// CAPTURA DE BOTONES
const anteriorBtn = document.querySelector('.anteriorBtn');
const resetBtn = document.querySelector('.resetBtn');
const siguienteBtn = document.querySelector('.siguienteBtn');
const insertarNumero = document.querySelector('.insertarNum');

// VALIDACION DE BOTONES

if (anteriorBtn !== null && anteriorBtn !== undefined && anteriorBtn instanceof HTMLButtonElement) {
  anteriorBtn.disabled = false;
}
if (resetBtn !== null && resetBtn !== undefined && resetBtn instanceof HTMLButtonElement) {
  resetBtn.disabled = false;
}
if (siguienteBtn !== null && siguienteBtn !== undefined && siguienteBtn instanceof HTMLButtonElement) {
  siguienteBtn.disabled = false;
}
if (insertarNumero !== null && insertarNumero !== undefined && insertarNumero instanceof HTMLButtonElement) {
  insertarNumero.disabled = false;
}


// CAPTURA DE TURNO
let turno = document.querySelector('h1.numero-turno');
if (turno !== null && turno !== undefined && turno instanceof HTMLHeadingElement) {
  let nuevoTurno: number = Number(turno.textContent);
}
// Funcion para aumentar un numero de turno.
function aumentarTurno(): void {
  if (nuevoTurno < 0) {
    anteriorBtn.disabled = true;
    resetBtn.disabled = true;
  } else {
    anteriorBtn.disabled = false;
    resetBtn.disabled = false;
    nuevoTurno = nuevoTurno + 1;
  }
  turno.innerHTML = nuevoTurno.toString().padStart(2, '0');
}

// Funcion para restar un numero de turno.
function restarTurno(): void {
  if (nuevoTurno <= 0) {
    anteriorBtn.disabled = true;
    resetBtn.disabled = true;
  } else {
    anteriorBtn.disabled = false;
    resetBtn.disabled = false;
    nuevoTurno = nuevoTurno - 1;
  }
  turno.innerHTML = nuevoTurno.toString().padStart(2, '0');
}

// Funcion para resetear numero de turno.
function resetearTurno(): void {
  nuevoTurno = 0;
  turno.innerHTML = '0';
}

// Funcion para insertar numero personalizado
function numeroPersonalizado(): void {
  nuevoTurno = Number((document.querySelector('.numeroUsuario') as HTMLInputElement).value);
  turno.innerHTML = nuevoTurno.toString().padStart(2, '0');
}

siguienteBtn.addEventListener('click', aumentarTurno);
anteriorBtn.addEventListener('click', restarTurno);
resetBtn.addEventListener('click', resetearTurno);
insertarNumero.addEventListener('click', numeroPersonalizado);
