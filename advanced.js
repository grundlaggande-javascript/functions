// createCounter returns a function. This functions has access to and can update internal variables.
const createCounter = () => {
    let n = 0
    return () => n++
}

const counter = createCounter() //counter is a function
console.log(counter()) //returns 0
console.log(counter()) // returns 1 because counter keeps track of the internal variable n.

