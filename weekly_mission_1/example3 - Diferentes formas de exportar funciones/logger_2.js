/*
    Al exportar una función/objeto así:
    > module.exports.verbose

    Estaremos exportando el contenido con el nombre `verbose`

    module.exports hará que puedas invocar esta función en otro script como:
    > const logger = require('./logger')

    y usarla como:
    > logger("Heeeey!")
*/

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}