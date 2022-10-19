function attacker( {name} ) {
    return {
        attack: () => {
            return console.log(`${name} ATTACKED`)
        }
    }
 }

function mover( {name} ) {
    return {
        move: () => {
            return console.log(`${name} MOVED`)
        }
    }
}

function swimmer( {name} ) {
    return {
        swim: () => {
            return console.log(`${name} SWAM`)
        }
    }
}

// Composition/containment
function char(name) {
    const animal = { name: name } 

    return {
        ...animal,
        ...attacker(animal),
        ...mover(animal),
        ...swimmer(animal)
    }
}


const nero = char('Nero');

nero.attack();
nero.move();
nero.swim();

console.log(nero);