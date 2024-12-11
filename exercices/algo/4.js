// Créez un objet panier contenant une liste de produits représenté par (Nom, Quantité, Prix) . 
// Écrivez une fonction ajouterProduitPanier qui :
// Ajoute un produit à la liste.
// Modifie la quantité si le produit existe déjà.
// Retourne le prix total des produits dans le panier.

const panier = []


const ajouterProduitPanier = (name, price) => {

  const index = panier.findIndex( (produit) => produit.name == name && produit.price == price )
  
  if (index !== -1){
    panier[index].quantite ++ 
  } else {
    panier.push({name, price, quantite:1})
  }

  // return panier.reduce( (acc, produit) => acc + produit.price * produit.quantite , 0)
  let total = 0
  panier.map(produit => total += produit.price * produit.quantite)
  return total

}


console.log(ajouterProduitPanier("Pomme", 2))
console.log(ajouterProduitPanier("Pomme", 2)) 
console.log(ajouterProduitPanier("Banane", 3))
console.log(ajouterProduitPanier("Orange", 4))
console.log(ajouterProduitPanier("Pomme", 2))



