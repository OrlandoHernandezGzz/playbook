const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger.
logger.log('This in an informational message')

/*
    También puede instanciar uno nuevo de esta manera:
    const customerLogger = new logger.constructor('CUSTOM')
    customerLogger.log('This in an informational message')
*/