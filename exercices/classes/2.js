// Créez une classe Livre avec des propriétés comme titre et auteur. Créez ensuite une classe Bibliotheque qui :
// Permet d’ajouter des livres.
// Recherche un livre par son titre.

class Livre {
  constructor (titre, auteur) {
    this.titre = titre
    this.auteur = auteur
  }
}

class Bibliotheque {
  constructor () {
    this.livres = []
  }

  ajouter( livre ) {
    this.livres.push(livre)
  }

  // create( titre, auteur ){
  //   this.livres.push( new Livre(titre, auteur))
  // }


  rechercher(titre) {
    return this.livres.filter( livre => livre.titre === titre )
  }
}


const biblio = new Bibliotheque()


const livre1 = new Livre("Les Misérables", "Victor Hugo")
const livre2 = new Livre("L'Étranger", "Albert Camus") 
const livre3 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry")
const livre4 = new Livre("Madame Bovary", "Gustave Flaubert")
const livre5 = new Livre("Notre-Dame de Paris", "Victor Hugo")
const livre6 = new Livre("Germinal", "Émile Zola")


biblio.ajouter(livre1)
biblio.ajouter(livre3)
biblio.ajouter(livre2)
biblio.ajouter(livre4)

// console.log(biblio.livres)

console.log(biblio.rechercher("Les Misérables") )
