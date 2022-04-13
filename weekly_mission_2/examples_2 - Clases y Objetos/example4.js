// Ejemplo 4: Métodos en los objetos.
class Repository {
    constructor(name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    // Función que ejecutara cualquer objeto instanciado de esta clase.
    getInfo(){
        return `Repository ${this.name} has ${this.stars} starts`
    }
}

console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("Launchx", "Orlando", "JS", 100)
console.log(myRepo.getInfo())