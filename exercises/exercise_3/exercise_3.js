class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    
    get getTotalIssuess(){
        return this.issues_open + this.issues_close
    }

    get getGeneralInfo(){
        return `
            Nombre del repo: ${this.name} \n
            Author: ${this.author} \n
            Cantidad de Commits: ${this.numberOfCommits} \n
            stars: ${this.stars} \n
            forks: ${this.forks} \n
            issues abiertas: ${this.issues_open} \n
            issues cerradas: ${this.issues_close} \n
            Total de issues: ${this.getTotalIssuess}
        `
    }
}

const repo1 = new Repo("Playbook", "Carlos", "English", 20, 3, 1, 10, 2)

console.log(repo1)
console.log(`Total de issues: ${repo1.getTotalIssuess}`)
console.log(repo1.getGeneralInfo)