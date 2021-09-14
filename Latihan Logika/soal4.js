function caripola(angka){
    if(angka.length<2){
        return false
    }

    let acuan = angka[1] - angka[0]

    for(let i=1; i<angka.length-1; i++){
        let x = angka[i]
        let y = angka[i+1]
        let pembanding = y - x

        if(pembanding!=acuan){
            return false
        }
    }
    return true
}

console.log(caripola([6]))
console.log(caripola([1,2,3,4,5,6]))
console.log(caripola([2,4,6,12,24]))
console.log(caripola([2,4,6,8]))
console.log(caripola([2,6,18,54]))
console.log(caripola([1,2,3,4,7,9]))