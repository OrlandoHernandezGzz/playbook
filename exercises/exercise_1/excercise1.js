const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   // Modelando objeto issue.
   const issue = {
       title: "",
       repositoryNameAssociated: "LaunchX",
       status: "Activo",
       numberOfComments: 10,
       labels: ["Adaptar", "Sobrevivir", "Vencer"],
       author: "Orlando Hernández",
       dataCreated: new Data(),
       lastUpdated: new Data(),
       getTitleAndAuthor: function(){
           return `Titulo: ${this.title}, Autor: ${this.author}`
       },
       getGeneralInfo: function(){
        return `${this.getTitleAndAuthor()}, Creado ${this.dataCreated}, comentarios: ${this.numberOfComments}`
      }
   }
   