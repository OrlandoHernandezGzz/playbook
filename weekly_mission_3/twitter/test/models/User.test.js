const User = require('./../../app/models/User')

describe('Unit Tests for User class', () => {
    test('Create an User object', () => {
        // Invoca el código que se usara.
        const user = new User(1, "Hernandez", "Orlando", "Bio")
        
        // Aqui se valida los resultados del codigo.
        // Los valores se compararan con los esperados toBe
        expect(user.id).toBe(1)
        expect(user.username).toBe("Hernandez")
        expect(user.name).toBe("Orlando")
        expect(user.bio).toBe("Bio")
        // Verifica que el valor no sea undefined
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('Add getters', () => {
        const user = new User(1, "Hernandez", "Orlando", "Bio")
        expect(user.getUsername).toBe("Hernandez")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()

    })

    test('Add setters', () => {
        const user = new User(1, "Hernandez", "Orlando", "Bio")
        user.setUsername = "Gilmar"
        expect(user.username).toBe("Gilmar")
        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})