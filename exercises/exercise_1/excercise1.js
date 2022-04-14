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
       title: "Semana 3 - Launchx",
       repositoryNameAssociated: "LaunchX",
       status: "Activo",
       numberOfComments: 10,
       labels: ["Adaptar", "Sobrevivir", "Vencer"],
       author: "Orlando Hernández",
       dataCreated: "13/04/2022",
       lastUpdated: "13/04/2022",
       getTitleAndAuthor: function(){
           return `Titulo: ${this.title}, Autor: ${this.author}`
       },
       getGeneralInfo: function(){
        return `${this.getTitleAndAuthor()}, Creado ${this.dataCreated}, comentarios: ${this.numberOfComments}`
      }
   }

   console.log("Nombre del issue: " + issue.title)
   console.log("Comentarios totales: " + issue.numberOfComments)
   console.log(issue.getGeneralInfo())
   
   // Modelando un pull request.
   const pullRequest = {
     title: "Actualizando rama",
     branchName: "Master",
     dateCreated: "13/04/2022",
     status: true,
     repositoryNameAssociated: "Launchx",
     getStatus: function(){
       if(this.status){
         return "Activo"
       } else {
         return "Inactivo"
       }
     },
     getTitleAndAuthor: function(){
       return `Titulo: ${this.title}, Autor: ${this.repositoryNameAssociated}`
     }
   }

   console.log("Nombre del pullRequest: " + pullRequest.title)
   console.log("Su estado es: " + pullRequest.getStatus())
   console.log(pullRequest.getTitleAndAuthor())


   // Modelando Facebook.
   const facebook = {
     user: {
      nombre: "Orlando",
      apodo: "Orla",
      frase: "Adaptar, Sobrevivir y vencer",      
     },
     post: {
      audience: ["Public", 'Friends', 'Only me'],
      mensaje: "Esta es mi primera publicación en facebook",
      fechaPost: "22/04/22",
      reacciones: 10,
      comentarios: 2,
      savePost: function(){
        return `${facebook.user.nombre} \n${this.fechaPost} ${this.audience[1]} \n${this.mensaje}`
      }
     },
   }

   console.log(facebook)
   console.log(facebook.post.savePost())