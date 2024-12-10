let notes = []

const add = (note) => {
  notes.push(note)
}

// const sum = () => {
//   let somme = 0
//   notes.map( (note) => somme = somme + note  )
//   return somme
// }

const sum = () => {
  return notes.reduce( (note, acc) => acc = acc + note  , 0)
}

const avg = () => {
  return sum() / notes.length
}

const remove = (note) => {
  notes = notes.filter( (n) => n !== note )
  return notes
}

const addone = () => {
  notes = notes.map( (note) => note = note + 1 )
}

add(18)
add(14)
add(20)
add(12)
add(6)

console.log(notes)
addone()
console.log(notes)

console.log(remove(6))
console.log(sum())
console.log(avg())