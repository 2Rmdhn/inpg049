function mengurutkan(kata){
    let alfabet = `abcdefghijklmnopqrstuvwxyz`
    let sudahurut = ``

    for(let i=0; i<alfabet.length; i++){
        let acuan = alfabet[i]
        for(j=0; j<kata.length; j++){
            let pembanding = kata[j]
            if(pembanding==acuan || pembanding==acuan.toUpperCase()){
                sudahurut += pembanding
            }
        }
    }
    return sudahurut
}

console.log(mengurutkan(`halo`))
console.log(mengurutkan(`qwerty`))
console.log(mengurutkan(`qwertyuiopasdfghjklzxcvbnm`))