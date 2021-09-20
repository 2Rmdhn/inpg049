function bilPrima(angka){
    if(angka<=1){
        return false
    }
    for(let i=2; i<angka; i++){
        if(angka%i==0){
            return false
        }
    }
   return true
}

console.log(bilPrima(3))
console.log(bilPrima(7))
console.log(bilPrima(6))
console.log(bilPrima(23))
console.log(bilPrima(33))
console.log(bilPrima(2))

// function dafBilPrima(awal,akhir){
//     let arr = []
//     for(let i=awal; i<=akhir; i++){
//         if(bilPrima(i)){
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(dafBilPrima(1,5))
// console.log(dafBilPrima(5,10))
// console.log(dafBilPrima(10,20))