// Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        // Esto guardará la fecha actual en la que se instancia el objeto
        this.dateCreated = new Date()
    }

    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("Launchx", "Mi primer PR", 100)
console.log(myPR1.getInfo())

// Puedes instanciar n cantidad de objetos de la misma clase.
const myPR2 = new PullRequest("Launchx", "Mi segundo PR", 99)
console.log(myPR2.getInfo())