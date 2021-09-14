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
