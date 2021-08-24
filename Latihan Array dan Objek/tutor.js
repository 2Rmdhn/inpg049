// Latihan tambahan
/**
 * Diberikan sebuah array berisi object makanan,
 * tampilkan di file HTML dengan <ul> dan <li>
 * 
 * Makanan favorit Andhika:
 * - pizza
 * - nasi goreng
 * - ayam bakar
 */

 let makanan_favorit = [
    {nama: "pizza", merk: "dominos", harga: 25000},
    {nama: "nasi goreng", merk: "gerobak depan rumah", harga: 12500},
    {nama: "ayam bakar", merk: "ny. suharti", harga: 37500},
    {nama: "ayam goreng", merk: "ny. suharti", harga: 47500},
]

makanan_favorit[0]['nama']
makanan_favorit[1]['nama']
makanan_favorit[2]['nama']

for (let i = 0; i < 3; i++){
    console.log(i)
}

for (let i = 0; i < 3; i++){
    console.log(i)
    console.log(makanan_favorit[i]['nama'])
}

for (let i = 0; i < makanan_favorit.length; i++){
    console.log(i)
    console.log(makanan_favorit[i]['nama'])
}

for (let i = 0; i < makanan_favorit.length; i++){
    console.log(i)
    console.log(makanan_favorit[i]['nama'])
    document.getElementById("list-makanan").innerHTML += `<li>${makanan_favorit[i]['nama']}</li>`
}

let harga = document.getElementById("harga")
harga.innerHTML = makanan_favorit.reduce((total, makanan) =>{
return total + makanan["harga"]
}, 0)

let mahal = document.getElementById("mahal")
let makanan_mahal = makanan_favorit.filter((makanan) => {
    return makanan["harga"] > 25000
})
for (let m of makanan_mahal){
    mahal.innerHTML += m['nama'] + ", "
}