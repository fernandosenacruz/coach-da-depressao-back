const { readFile } = require('fs/promises');

/**
 * Retorna lista de frases
 * @returns {{
 *  Array: { Object }
 * }}
 */

module.exports = async () => await readFile('./assets/phrases.json', 'utf-8')
      .then((phrases) => JSON.parse(phrases));
