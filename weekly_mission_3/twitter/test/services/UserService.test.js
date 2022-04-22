const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Hernandez", "Orlando")
        expect(user.username).toBe('Hernandez')
        expect(user.name).toBe('Orlando')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})