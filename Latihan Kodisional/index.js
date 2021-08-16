// let password = 1234
// let inputpassword = prompt("Silahkan Masukan Password Anda..")

// if(inputpassword == password){
//     alert("Password anda sudah benar")
// }else{
//     alert("Password kamu salah")
// }
// -------------------------------------

// let inputangka = prompt("Silahkan masukan nilai anda")

// if(inputangka >=80 && inputangka <=100){
//     alert("Your Grade is A")
// }else if(inputangka >=60 && inputangka <80){
//     alert("Your Grade is B")
// }else if(inputangka >=40 && inputangka <60){
//     alert("Your Grade is C")
// } else if(inputangka <40){
//     alert("Your Grade is D")
// }else{
//     alert("Cannot Calculate Your Grade")
// }
// -------------------------------------

// let list = 1
// while(list <= 20){
//     if(list % 2 == 1){
//         console.log(`Saya Orang ke ${list}`)
//     }
//     list++
// }

// for(list = 1; list<=20; list++){
//     if(list %2 == 0){
//         console.log(`Saya Orang ke ${list}`)
//     }
// }
// -------------------------------------

let x = 4
let s = ""
for(let i=0; i<x; i++){
    for(let j=0; j<x; j++){
        s += "0"
    }
    s += "\n"
}
console.log(s)
