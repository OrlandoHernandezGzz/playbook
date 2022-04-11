// Invoca el módulo que contiene la clase.
const Logger = require('./logger')

// Creación de un objeto.
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase.
// Invocación del método.
dbLogger.info('This is an informational message')

// Creación de otro objeto.
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')