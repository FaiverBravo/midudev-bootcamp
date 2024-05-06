console.log('Hola a tosos estaré aprendiendo JS')

let firstName = "Faiver"
const lastName = 4
var isDeveloper = true
// esto cambia a MAYUSCULAS
const firstNameWithUpperCase = firstName.toUpperCase()

console.log(firstNameWithUpperCase)
// un array se puede mutar es decir cambia su valor
const list =[]
const anotherList= list.concat(124)

console.log(anotherList) 
// objeto
const persona ={
    name : "faiver",
    web: "faiverdev",
    age: 18,
    isDeveloper: true,
    links: ['https://midu.tube', 'https://midu.live']
}

console.log(persona.name) // devuelve el objeto name "faiver"
console.log(persona.links[0])// devuelve el 1er objeto del arreglo links (https://midu.tube)
// otra forma propiedad dinámica
const field = 'web'
console.log(persona[field]) //devuelve el objeto web

//---------------Funciones----------------------//
const sumar = (a,b) => {
    console.log(a)
    console.log(b)
    return a + b
}
console.log(sumar(2, 4))

const op1 = 7
const op2 = 4
console.log(sumar(op1, op2))