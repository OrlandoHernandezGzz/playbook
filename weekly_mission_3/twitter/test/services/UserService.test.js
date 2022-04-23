const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Hernandez", "Orlando")
        expect(user.username).toBe('Hernandez')
        expect(user.name).toBe('Orlando')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "Hernandez", "Orlando")
        const userInfo = UserService.getInfo(user);
        expect(userInfo[0]).toBe(1)
        expect(userInfo[1]).toBe("Hernandez")
        expect(userInfo[2]).toBe("Orlando")
        expect(userInfo[3]).toBe("Sin Bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "Hernandez", "Orlando")
        UserService.updateUserUsername(user, "OrlaHdz")
        expect(user.username).toBe("OrlaHdz")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "OrlaHdz1", "Orlando")
        const user2 = UserService.create(2, "OrlaHdz2", "Orlando")
        const user3 = UserService.create(3, "OrlaHdz3", "Orlando")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("OrlaHdz1")
        expect(usernames).toContain("OrlaHdz2")
        expect(usernames).toContain("OrlaHdz3")
    })
})