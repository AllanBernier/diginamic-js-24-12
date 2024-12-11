let notes = [10,15,20]


notes.map( (element) => {} )
notes.filter( (element) => element > 10)


// const acc = 0
// notes.map( (element) => acc = acc + element )
notes.reduce( (element, acc) => acc = acc + element , 0)

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




let animaux = ['Chat', 'Chien']

let animauxCopy = animaux // copy referance
// let animauxCopy = [ ... animaux  ] // copy contenu

animaux.push("Souris")

console.log(animaux)
console.log(animauxCopy)
