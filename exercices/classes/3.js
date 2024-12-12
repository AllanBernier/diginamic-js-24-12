// Créez une classe Vehicule avec une méthode deplacer(). 
// Créez ensuite des classes enfants Voiture et Bateau qui 
// héritent de Vehicule mais ajoutent leurs propres méthodes (ex. klaxonner() pour Voiture).


class Vehicule {

  // constructor () {
  //   console.log("Vehicule")
  // }

  deplacer() {
    console.log("Le vehicule se déplace")
  }
}


class Voiture extends Vehicule {

  // constructor(){
  //   super()
  //   console.log("Voiture")
  // }

  klaxonner(){
    console.log("Pouet pouet")
  }
}


class Bateau extends Vehicule {

  larguerLesAmarres() {
    console.log("Larguer les amarres !")
  }
}


const car = new Voiture()

car.deplacer()
car.klaxonner()
// car.larguerLesAmarres() // Error


const boat = new Bateau()
boat.deplacer()
boat.larguerLesAmarres()
// boat.klaxonner() // Error


