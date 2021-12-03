function listGifts(letter) {
  // ¡Tú puedes!
  const regalos = letter.split(' ');
  const result = {};

  regalos
    .filter((regalo) => !regalo.startsWith('_'))
    .forEach((regalo) => {
      if (regalo === '') return;
      if (!result[regalo]) {
        result[regalo] = 1;
      } else {
        result[regalo]++;
      }
    });

  return result;
}

const carta = 'bici coche balón _playstation bici coche peluche';

const regalos = listGifts(carta);

console.log(regalos);
