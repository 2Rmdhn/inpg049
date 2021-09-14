function tukar(kata){
    let tertukar = ``
    for(let i=kata.length-1; i>=0; i--){
        tertukar += kata[i]
    }
    return tertukar
}

console.log(tukar(`Hello World and Coders`))
console.log(tukar(`John Doe`))
console.log(tukar(`I am a bookworm`))
console.log(tukar(`Coding is my hobby`))
console.log(tukar(`Super`))
