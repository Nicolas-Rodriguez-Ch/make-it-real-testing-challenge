const { createRobot } = require('./robot');
const { instructions } = createRobot(7, 3)

describe('createRobot', () => {
    describe('advance', ()=>{
        it('should advance the robot one space up', () => {
            const result = instructions('RAALAL');
            expect(result).toEqual(expect.objectContaining({
                'orientation': 'W',
                'x':10,
                'y': 2
            }))
        });
    })
});
// Caso inicial de caso inicial es que inicia en pos 7, 3 y se le pasa el input de RAALAL termina en 9, 4 
