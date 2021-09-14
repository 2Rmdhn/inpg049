
//menggunakan regex
// function polaab(text){
//     let polaAB = /a...b/
//     let polaBA = /b...a/
//     return polaAB.test(text) || polaBA.test(text)
// }

function polaab(kata){
    for(let i=0; i<kata.length-4; i++){
        acuan = kata[i] + kata[i+4]
        if(acuan===`ab` || acuan===`ba`){
            return true
        }
    }
    return false
}

console.log(polaab(`lane borrowed`))
console.log(polaab(`i am sick`))
console.log(polaab(`you are boring`))
console.log(polaab(`barbarian`))
console.log(polaab(`bacon and meet`))