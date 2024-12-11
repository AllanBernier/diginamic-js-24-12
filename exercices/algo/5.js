// Créez une fonction isAnagram qui prend deux chaînes en paramètre et retourne 
// true si elles sont des anagrammes (les mêmes lettres, mais dans un ordre différent).


const isAnagram = (str1, str2) => {

  if (str1.length !== str2.length){
    return false
  }

  const sort1 = str1.split('').sort().join('')
  const sort2 = str2.split('').sort().join('')

  return sort1 === sort2 
}

console.log(isAnagram("hello", "world"))
console.log(isAnagram("listen", "slient"))




