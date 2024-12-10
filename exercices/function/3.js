// Crée une fonction calculateTotal qui prend deux paramètres : price et taxRate.
// Si taxRate n'est pas fourni, il doit avoir une valeur par défaut de 0.2. 
// La fonction retourne le prix total après taxes.


const calculateTotal = (price, taxRate = 0.2) => {
  return price * (1-taxRate)
}


console.log(calculateTotal(100))
console.log(calculateTotal(80,0.05))
console.log(calculateTotal(50,1))