const MissionCommander = require('./../app/missionComander');

describe('Unit Tests for Mission Commander Class', () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa");
        expect(myMissionCommander.name).toBe("Woopa");
    })
})

// describe("Esto es una suite de pruebas", () => {
//     test('Caso de prueba 1', () => {
//         const result = 10 + 0;
//         expect(result).toBe(10);
//     });
// })