/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/

// Ejemplo 9: Herencia entre dos clases.
class Developer {
    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName(){
        return this.name
    }
}

console.log("Ejemplo 9: Herencia entre dos clases")
const orlaDev = new Developer("Orlando", "Js", ["elixir", "groovy","lisp"])
console.log(orlaDev)

// Se usa la palabra extends para indicar que heredaras las propiedades de la clase padre (Developer) en la clase defininda
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer {

}

const orlaLaunchXDev = new LaunchXStudent("Orla", "js", ["elixir", "groovy", "lisp"])
console.log(orlaLaunchXDev)
console.log(orlaLaunchXDev.getName)