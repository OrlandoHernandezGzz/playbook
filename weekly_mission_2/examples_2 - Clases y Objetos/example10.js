// Ejemplo 10: Overrinding methods.
class Explorer {
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUserName(){
        return `Explorer ${this.name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        // Super nos ayudará a llamar el constructor padre
        super(name, username, mission)
        // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la padre.
        this.cycle = cycle
    }

    getGeneralInfo(){
        // llamamos el método de la clase padre
        let nameAndUsername = this.getNameAndUserName()
        // nameAndUsername es una variable de esta función, no necesitas usar this para referenciarla
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}

const viajero1 = new Viajero("Orlando", "Launchx212", "NodeJs", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUserName()) // Método de la clase padre.
console.log(viajero1.getGeneralInfo()) // Método de la clase hija.