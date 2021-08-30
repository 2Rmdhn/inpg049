// Fungsi Map Filter Reduce

let angka = [1,2,3,4,5]
let convertToString = angka.map(function(elem){
    return elem.toString()
})
console.log(convertToString)


let ganjil = angka.map(function(elem){
    return elem % 2 !== 0
 })
 console.log(ganjil)


let genap = angka.filter((elem)=>{
    return elem % 2 == 0
})
console.log(genap)


let total = 0
for(let i = 0; i < angka.length; i++){
    total += angka[i]
    console.log(`${total} + ${angka[i]}`)
}
// console.log(total)


let result = angka.reduce((a,b)=>{
    return a+b
},0)
console.log(result)


let makanan_favorit = [
    {nama: "pizza", merk: "dominos", harga: 25000},
    {nama: "nasi goreng", merk: "gerobak depan rumah", harga: 12500},
    {nama: "ayam bakar", merk: "ny. suharti", harga: 37500},
]

let filter_makanan = makanan_favorit.map(function(elem){
    return {"dwi": elem.nama}
})
console.log(filter_makanan)

let filter_harga = makanan_favorit.sort(function(a,b){
    return b.harga - a.harga
})
console.log(filter_harga)