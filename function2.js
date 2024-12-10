const operation =(n1, n2, operator) => {
  return operator(n1,n2)
} 

const multiply = (n1,n2) => n1 * n2 
const addition = (n1,n2) => n1 + n2 

// console.log(operation(15,30,multiply))
// console.log(operation(15,30,addition))



const createCounter = () => {
  let i = 0
  return function () {
    i = i + 1
    return i
  }
}


const counter = createCounter()

const counter2 = createCounter()


// console.log(counter())
// console.log(counter())
// console.log(counter2())
// console.log(counter())
// console.log(counter())
// console.log(counter2())


// setTimeout(() => console.log("Hello"), 3000)

const debounce = (cb, delay) => {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout( () => cb(), delay )
  }
}


const btnAction = () => {
  console.log("Last Click")
}

const btn = debounce( btnAction, 2000)

btn()
setTimeout(()=> console.log("click"), 1000)

btn()
setTimeout(()=> console.log("click"), 1500)

btn()
setTimeout(()=> console.log("click"), 500)

btn()
setTimeout(()=> console.log("click"), 1000)

btn()

