const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }

    // Métodos.
    static getInfo(user){
        return Object.values(user)
    }

    static updateUserUsername(user, newUsername){
        user.username = newUsername
    }

    static getAllUsernames(user){
        const userNames = user.map(user => user.username)
        return userNames
    }
}

module.exports = UserService

