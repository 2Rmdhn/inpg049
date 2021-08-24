// objek didalam array

let makanan_favorit = [
        {nama: "pizza", merk: "dominos", harga: 25000},
        {nama: "nasi goreng", merk: "gerobak depan rumah", harga: 12500},
        {nama: "ayam bakar", merk: "ny. suharti", harga: 37500},
]

    for (let i=0;i<makanan_favorit.length;i++){
        console.log(makanan_favorit[i]["nama"])
        console.log(makanan_favorit[i]["harga"])
    }

    for (let i=0;i<makanan_favorit.length;i++){
        console.log(makanan_favorit[i]["nama"])
    }

    for (let i=0;i<makanan_favorit.length;i++){
        console.log(makanan_favorit[i]["harga"])
    }

    for (let i=0;i<makanan_favorit.length;i++){
        document.getElementById("list-makanan").innerHTML += `<li>${makanan_favorit[i]["nama"]}: ${makanan_favorit[i]["harga"]}</li>`
    }

// -------------------------------------------------------------------

// Fungsi Modular

// contoh encrypt password
// 1 buat fungsi menghapus spasi
// 2 buat fungsi membalik sebuah kata
// 3 buat fungsi merubah huruf vokal

// 1.
function menghapusSpasi(password){
    let sudahtanpaspasi = ""
    for(let carispasi of password){
        if(carispasi === " "){
            sudahtanpaspasi += ""
        }else{
            sudahtanpaspasi += carispasi
        }
    }
    return sudahtanpaspasi
}
//2.
function membalikKata(sudahtanpaspasi){
    let katasudahdibalik = ""
    for(let i = sudahtanpaspasi.length-1; i>=0; i--){
        katasudahdibalik += sudahtanpaspasi[i]
    }
    return katasudahdibalik
}
//3.
function merubahHuruf(katasudahdibalik){
    let hurufsudahdiubah = ""
    for(let carivokal of katasudahdibalik){
        if(carivokal.toUpperCase() === "A"){
            hurufsudahdiubah += "B"
        }else if(carivokal.toUpperCase() === "I"){
            hurufsudahdiubah += "J"
        }else if(carivokal.toUpperCase() === "U"){
            hurufsudahdiubah += "V"
        }else if(carivokal.toUpperCase() === "E"){
            hurufsudahdiubah += "F"
        }else if(carivokal.toUpperCase() === "O"){
            hurufsudahdiubah += "P"
        }else{
            hurufsudahdiubah += carivokal
        }
    }
    return hurufsudahdiubah
}

let proses1 = menghapusSpasi("ini huruf a i u e o")
let proses2 = membalikKata(proses1)
let proses3 = merubahHuruf(proses2)
console.log(proses3)