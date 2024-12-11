// Créez un tableau d’objets représentant des étudiants, avec des propriétés nom et note. Écrivez une fonction qui :
// Filtre les étudiants avec une note supérieure à une valeur donnée.
// Calcule la moyenne des notes.

const students = [
  {nom: "Alice", note: 15},
  {nom: "Bob", note: 12}, 
  {nom: "Charlie", note: 18},
  {nom: "David", note: 9},
  {nom: "Eve", note: 16},
  {nom: "Frank", note: 13},
  {nom: "Grace", note: 19},
  {nom: "Henry", note: 11}
]



const getStudentAbove = (expectedNote) => {
  const studentsAbove = students.filter( (student) => student.note > expectedNote )
  const avg = studentsAbove.reduce( (acc, student) => acc + student.note , 0) / studentsAbove.length
  return {avg, studentsAbove}
}


console.log(getStudentAbove(16))