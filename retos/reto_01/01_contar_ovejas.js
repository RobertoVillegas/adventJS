// https://adventjs.dev/challenges/01

function contarOvejas(ovejas) {
  // aquí tu magia
  return ovejas.filter(
    (oveja) =>
      oveja.color === 'rojo' &&
      oveja.name.toLowerCase().includes('a') &&
      oveja.name.toLowerCase().includes('n')
  );
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
