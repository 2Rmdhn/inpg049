// function fpb(angka1,angka2){
//     let mod = 0
//     while(angka2!=0){
//         mod = angka1%angka2
//         angka1 = angka2
//         angka2 = mod
//     }
//     return angka1
// }

function fpb(angka1,angka2){
    let hasil = 0
    for(i=1;i<=angka1; i++){
        if(angka1%i==0 && angka2%i==0){
            hasil = i
        }
    }
    return hasil
}

console.log(fpb(12,16))
console.log(fpb(50,40))
console.log(fpb(22,99))
console.log(fpb(24,36))
console.log(fpb(17,23))