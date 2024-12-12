class Voiture {
    constructor(marque, model) {
    this.marque = marque
    this.model = model
  }
  whoAmI() {
    console.log(`Voiture de marque ${this.marque}, model ${this.model}`)
  }
}  

const voiture1 = new Voiture("Peugot", "206")
const voiture2 = new Voiture("Peugot", "55")
const voiture3 = new Voiture()
voiture3.marque = "Tesla"
// voiture3.whoAmI()
// voiture1.whoAmI()

class Animal {
  constructor( name) {
    this.name = name
  }
  manger() {
    console.log(`${this.name} mange `)
  }
}

class Cat extends Animal{
  miauler() {
    console.log("Miaou")
  }
}

const animal = new Animal("Toto")
const Lilou = new Cat("Lilou")

// animal.manger()
// Lilou.manger()
// Lilou.miauler()

Lilou.age = 5
Lilou.hello = () => {
  console.log("world")
}

// Lilou.hello()

// ===============================



let dynamicField = "fezfez"

const obj = {

  name : "Jhon",
  [dynamicField] : "value"
}

let dynamic = "toto"

obj[dynamic] = "value 2"

console.log(obj)




