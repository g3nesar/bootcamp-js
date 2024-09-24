import './style.css';

let estilos: string = 'font-weight:bold; font-size:18px; background-color:green;';
interface Bands {
  nombre: string;
  fundacion: number;
  activo: boolean;
  genero: string;
}

const bandaUno: Bands = {
  nombre: 'The Beatles',
  fundacion: 1960,
  activo: true,
  genero: '🎵 Pop Rock',
};

const bandaDos: Bands = {
  nombre: 'Queen',
  fundacion: 1970,
  activo: false,
  genero: '🎸 Rock',
};

const bandaTres: Bands = {
  nombre: 'AC DC',
  fundacion: 1973,
  activo: true,
  genero: '🤘 Hard Rock',
};

const bandaCuatro: Bands = {
  nombre: 'Ludwing van Beethoven',
  fundacion: 1770,
  activo: false,
  genero: '🎼 Clásica',
};

const bandaCinco: Bands = {
  nombre: 'The Rolling Stones',
  fundacion: 1962,
  activo: true,
  genero: '🎸 Rock',
};

console.log(`%cLa primera banda es: ${bandaUno.nombre}`, estilos);
console.log(bandaUno);
console.log(`%cLa segunda banda es: ${bandaDos.nombre}`, estilos);
console.log(bandaDos);
console.log(`%cLa tercera banda es: ${bandaTres.nombre}`, estilos);
console.log(bandaTres);
console.log(`%cLa cuarta banda es: ${bandaCuatro.nombre}`, estilos);
console.log(bandaCuatro);
console.log(`%cLa quinta banda es: ${bandaCinco.nombre}`, estilos);
console.log(bandaCinco);
