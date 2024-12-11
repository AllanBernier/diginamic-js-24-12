// Créez un tableau contenant une liste de produits (chaînes de caractères). Écrivez une fonction qui :
// Ajoute un produit au tableau.
// Supprime un produit du tableau.
// Vérifie si un produit existe dans le tableau.


let products = []

const addProduct = (product) => {
  products.push(product)
}

const removeProduct = (product) => {
  // products = products.filter( (element) => element !== product )

  const index = products.findIndex((element) => {
    if (product === element) {
      return true
    } else {
      return false
    }
  })
  // const index = products.findIndex((element) => product === element)


  products.splice(index, 1)
}


addProduct("Souris")
addProduct("Clavier")
addProduct("Souris")
addProduct("Souris")

removeProduct("Souris")



console.log(products)