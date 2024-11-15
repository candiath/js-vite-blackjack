
/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna una carta
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

  if ( deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  // ? Podría directamente hacer return deck.pop();
  const carta = deck.pop();
  return carta;
}