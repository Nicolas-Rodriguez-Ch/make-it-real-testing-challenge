exports.createRobot = (a, b) => {
   
    let x = a;
    let y = b;

    let orientation = "N" // dirección a la que apunta el robot "N", "E", "S", "W"
    
    function advance() {
        // función para avanzar
        try {
            if (x < 10) {
                x += 1;
                orientation = 'N';
            }
        } catch (error) {
            return error.message;
        }
    }
    
    function turnRight() {
        // función para girar a la derecha
        try {
            if (y <= 10) {
                y += 1;
                orientation = 'E';
            }
        } catch (error) {
            return error.message;
        }
    }
    
    function turnLeft() {
      // función para girar a la izquierda
      try {
          if (y >= 0 ) {
              y -= 1;
              orientation = 'W';
            }
        } catch (error) {
            return error.message;
        }
    }
    
    function instructions(str) {
        str = str.toUpperCase();
        // función para recibir una serie de instrucciones Ejm: "RAALAL"
        if (typeof str !== "string" || str.length <= 0) {
            throw new Error('error')
        } else {
            for (let i = 0; i < str.length; i++) {
                
                if (str[i] === 'A') {
                    advance();
                } else if (str[i] === 'R') {
                    turnRight();
                } else if (str[i] === 'L') {
                    turnLeft();
            }
        }
      }
      return {x, y, orientation};
    }
  
  return {advance, turnLeft, turnRight, instructions};
  }
// const { instructions } = createRobot(7, 3);
// console.log(instructions('RAALAL'));