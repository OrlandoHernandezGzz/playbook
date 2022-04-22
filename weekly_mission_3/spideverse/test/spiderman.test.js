const Spiderman = require("../app/spiderman")

describe('Unit Test for Spiderman Class', () => {
    test('1) Create an spiderman object', () => {
        // Aqui escribimos el codigo que qureremos usar tal cual
        // quiero poder instanciar un objeto de spiderman con esta informacion
        const andrew = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')
        
        // Validamos que este codigo funcione de la forma esperada.
        expect(andrew.name).toBe("Spiderman Sony")
        expect(andrew.age).toBe(31)
        expect(andrew.actor).toBe("Andrew Garfield")
        expect(andrew.movies).toBe(2)
        expect(andrew.studio).toBe("Sony")
    })

    test('2) Use the method getInfo()', () => {
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
    })
})


// describe('Test Suite Dummy Description', () => {
//     test('Case 1 Dummy', () => {
//         const resultOfSomething = 1 + 2
//         expect(resultOfSomething).toBe(18)
//     })
// })