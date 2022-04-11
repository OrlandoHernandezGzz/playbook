class Logger {
    constructor(name){
        // Esta es una variable para referenciar el valor del contexto local de esta clase.
        this.name = name // Estás variables se les conoce como atributos.
    }

    // Método
    // this.name es la variable que se guarda en el contexto local.
    // message es una variable que se le pasa al ejecutar este método.
    info(message){
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    // Método.
    verbose(message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

// Esta clase se exporta al módulo.
module.exports = Logger