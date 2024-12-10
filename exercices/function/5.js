// Créez une fonction calculerAvance qui accepte trois arguments :
// Deux nombres.
// Une fonction représentant une opération mathématique.
// Ajoutez deux nouvelles opérations :
// Une qui calcule la puissance (a^b).
// Une qui calcule le reste entier (a % b).

// const calculerAvance = (a,b,operator) => {
//   return operator(a,b)
// }

const calculerAvance = (a,b,operator) => operator(a,b)

const puissance = (a,b) => Math.pow(2,8)
const modulo = (a,b) => a%b

console.log(calculerAvance(2,8,puissance))
console.log(calculerAvance(255,8,modulo))

