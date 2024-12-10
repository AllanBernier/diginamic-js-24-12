
function toto() {
  console.log("Hello")
}


toto()



function addition(nombre1, nombre2) {
  return nombre1 + nombre2
}

const result = addition(5, 6)
console.log(result)


const soustration = (nombre1, nombre2) => { // Arrow function
  return nombre1 - nombre2
}

const soustration2 = (nombre1, nombre2) => nombre1 - nombre2 // Return implicite

// (Return multi lignes)
// const toto = () => (
//   <h1> // Jsx/Tsx

//   </h1>
// )


console.log(soustration(10, 3))



const test = (nombre1) => {
  if (isNaN(nombre1)) {
    return "Not a Number"
  }

  return nombre1
}


console.log(test("56"))
console.log(test("56fdzadz"))



