import './style.css';

// CAPTURA DE BOTONES
const anteriorBtn = document.querySelector('.anteriorBtn') as HTMLButtonElement;
const resetBtn = document.querySelector('.resetBtn') as HTMLButtonElement;
const siguienteBtn = document.querySelector('.siguienteBtn') as HTMLButtonElement;

// CAPTURA DE TURNO
let turno = document.querySelector('h1.numero-turno') as HTMLHeadingElement;
let nuevoTurno: number = Number(turno.textContent);
console.log(`Valor antes de hacer click en botones: ${nuevoTurno}`);

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

function resetearTurno(): void {
  nuevoTurno = 0;
  turno.innerHTML = '0';
}

siguienteBtn.addEventListener('click', aumentarTurno);
anteriorBtn.addEventListener('click', restarTurno);
resetBtn.addEventListener('click', resetearTurno);
