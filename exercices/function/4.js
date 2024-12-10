// Crée une fonction getFullName qui prend deux paramètres : 
// firstName et lastName. À l'intérieur de cette fonction, 
// définis une autre fonction appelée capitalize qui prend une 
// chaîne et retourne cette chaîne avec la première lettre en majuscule. 
// Utilise capitalize pour formater firstName et lastName avant de les combiner en un nom complet.





const getFullName = (firstName, lastName) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
  return `${capitalize(firstName)} ${capitalize(lastName)}`
}

console.log(getFullName("jhon", "doe"))