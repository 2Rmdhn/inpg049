function dafBilPrima(awal,akhir){
    let arr = []
    for(let i=awal; i<=akhir; i++){
        let pembagi = 0
        for(let j=2; j<=i; j++){
            if(i%j==0){
                pembagi++
            }
        }
        if(pembagi==1){
            arr.push(i)
        }
    }
    return arr
}

console.log(dafBilPrima(1,5))
console.log(dafBilPrima(5,10))
console.log(dafBilPrima(10,20))