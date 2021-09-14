function membandingkan(angka1,angka2){
    if(angka1 == angka2){
        return -1
    }else if(angka1 < angka2){
        return true
    }else{
        return false
    }
}

console.log(membandingkan(5,8))
console.log(membandingkan(5,3))
console.log(membandingkan(4,4))
console.log(membandingkan(3,3))
console.log(membandingkan(17,2))