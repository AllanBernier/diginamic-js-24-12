// Créez une fonction analyserPhrase qui prend une phrase en entrée et retourne un objet contenant :
// Le nombre total de mots.
// Le mot le plus long.
// Le nombre d'occurrences de chaque mot.


const analyserPhrase = (sentence) => {
  const result = {}

  const words = sentence.split(" ")

  // Le nombre total de mots 
  result.sentenceLength = words.length

  // Le mot le plus long.
  result.longestWord = ""
  words.map((word) => {
    if (word.length > result.longestWord.length) {
      result.longestWord = word
    }
  })

  // Le nombre d'occurrences de chaque mot.
  result.occurrences = words.reduce((acc, word) => {
    acc[word] = ( acc[word] || 0 ) + 1
    return acc
  }, {})

  return result
}



console.log(analyserPhrase("Créez une fonction objet qui prend une objet en entrée et objet une objet contenant"))





// result.occurrences = words.reduce((acc, word) => {
//   if (acc[word] === undefined) {
//     acc[word] = 1
//   } else {
//     acc[word] = acc[word] + 1
//   }

//   return acc
// }, {})


  // Le mot le plus long.
  // result.longestWord = ""
  // words.map((word) => { 
  //   // Ternaire
  //   result.longestWord = word.length > result.longestWord.length ? word : result.longestWord
  // })


  // result.longestWord = words.reduce( (acc, word) => {
  //   if (word.length > acc.length) {
  //     return word
  //   }
  //   return acc
  // }, "")
