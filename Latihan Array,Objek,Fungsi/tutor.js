//Array 

let list_buah = ["apel", "duku", "mangga"]

// pemakaian array dengan kondisional
// apakah array list buahnya ada isinya?
if (list_buah.length){
    console.log("list buah ada isinya")
}

// pemakaian array dengan loop
// cetak semua buah yang ada di dalam list_buah

// cara manual satu satu
// console.log(list_buah[0])
// console.log(list_buah[1])
// console.log(list_buah[2])

// dengan loop
for(let i = 0; i < list_buah.length; i++){
    console.log(list_buah[i])
}

console.log("----------")

// cara lain loop array
for (let buah of list_buah){
    console.log(buah)
}


// tambahkan satu buah "jeruk" ke dalam array list_buah
// push
list_buah.push("jeruk")
// cara lain adalah dengan menggunakan length dari array nya
// list_buah[list_buah.length] = "jeruk"

// keluarin item terakhir dengan pop
list_buah.pop()

// keluarin item paling depan dengan shift
list_buah.shift()

// tambahkan satu buah "semangka" ke dalam array list_buah dari paling depan
list_buah.unshift("semangka")

// hapus "duku" yang ada di posisi index 1
list_buah.splice(1,1)

// tambahin "apel" dan "pisang" ke dalam list_buah dari posisi 1
list_buah.splice(1,0,"apel","pisang")

//list_buah.splice(1,5) // hapusnya bisa lebih dari 1, dia akan hapus ke kanan


// ubah isi array, bisa langsung assign nilai baru ke sebuah posisi index di array
list_buah[0] = "buah_naga"


// sort, sortir isi array nya
list_buah.sort()
// kalau urutan mau dibalik bisa pakai reverse
// list_buah.reverse()


// bikin array baru dari bagian array lama
let list_buah2 = list_buah.slice(1,3)


// join, menggabungnya seluruh isi array jadi sebuah string, dengan pilihan pemisah
list_buah.join(", ") // isi dari join adalah pemisah (secara default adalah ,)

// split, memisahkan sebuah string menjadi sebuah array
let str_buah = "banana, apple, orange, tomato"
let list_buah3 = str_buah.split(", ")
list_buah3.push("kiwi")

console.log("==========")
for (let buah of list_buah3){
    console.log(buah)
}

list_buah3.splice(1,2) // dari index 1, hapus 2 item di list_buah3
document.getElementById("list-buah").innerHTML = list_buah3
list_buah2 = list_buah3.slice(1,3)
document.getElementById("list-buah-2").innerHTML = list_buah2


// contoh pengiriman sms (bentuk text)
let sms = "REG#123456#Hacktiv8"
let data_customer = sms.split("#")
data_customer[0] // tipe sms yg diinginkan, "REG"
data_customer[1] // nomor ktp
data_customer[2] // nama customernya



// mencari buah "apel" di list_buah
list_buah.push("mangga")
console.log(list_buah)

let dicari = "mangga"
let counter = 0
// cek satu per satu item di list_buah
for(let i = 0; i < list_buah.length; i++){
    let buah = list_buah[i]

    // cek apakah ini buah yang dicari
    if (buah === dicari){
        counter++
        console.log(`${dicari} ada di index ${i}, total ada ${counter}`)
    }
}

//---------------------------------------------------------------------

// Objek adalah ilustrasi barang dunia nyata ke bentuk code

/**
 * misalnya kita punya toko e-commerce, mau jual barang
 * setiap barang perlu punya:
 * 
 * ID
 * nama
 * kategori
 * harga
 * stok
 * 
 */

 let barang = {
    ID: 'ASD3456',
    nama: 'Pen Faster',
    kategori: 'atk',
    harga: 2500,
    stok: 144
}

// mau ambil nama barang
barang['nama'] //'Pen Faster'

let gudang = [
    { ID: 'ASD3456', nama: 'Pen Faster', kategori: 'atk', harga: 2500, stok: 144 },
    { ID: 'ASD3457', nama: 'Pen Joyko', kategori: 'atk', harga: 1500, stok: 120 },
    { ID: 'ASD3458', nama: 'Penghapus Joyko', kategori: 'atk', harga: 500, stok: 2120 },
    { ID: 'ASD3459', nama: 'Bantal Dunlopilo', kategori: 'furnitur', harga: 250000, stok: 15 },
    { ID: 'ASD3460', nama: 'Guling KingKoil', kategori: 'furnitur', harga: 175000, stok: 16 },
]

// mau ambil barang yg ada di urutan pertama
gudang[0] //{ ID: 'ASD3456', nama: 'Pen Faster', kategori: 'atk', harga: 2500, stok: 144 }
gudang[0]['nama'] //'Pen Faster'

// cetak semua barang di gudang
for (let barang of gudang){
    console.log(barang['nama'])
}

console.log("==========")

let orang = {
    KTP: '4567891230',
    nama: 'Andhika',
    nasionalitas: 'Indonesia',
    umur: 52,
    hobi: ['baca buku', 'jalan-jalan', 'main game'],
    makanan_favorit: [
        {nama: "pizza", merk: "dominos", harga: 25000},
        {nama: "nasi goreng", merk: "gerobak depan rumah", harga: 12500},
        {nama: "ayam bakar", merk: "ny. suharti", harga: 37500},
    ]
}

// cetak hobinya andhika apa saja
orang['hobi'] // ['baca buku', 'jalan-jalan', 'main game']
orang['hobi'][0] // 'baca buku'

for (let aktifitas of orang['hobi']){
    console.log(aktifitas)
}

console.log("==========")

// cetak nama nama makanan kesukaan andhika
orang // object
orang['makanan_favorit'] // array isi object makanan
orang['makanan_favorit'][0] // object makanan
orang['makanan_favorit'][0]['nama'] // string nama makanannya

for (let obj_makanan of orang['makanan_favorit']){
    console.log(`${obj_makanan['nama']} ${obj_makanan['merk']} seharga ${obj_makanan['harga']}`)
}

console.log("==========")
//---------------------------------------------------------------

// penjelasan medium disini https://debbysa23.medium.com/manipulasi-data-pakai-map-reduce-dan-filter-di-javascript-f22f66145755

// MAP
// diberikan sebuah array isi angka
let nilai = [30, 70, 20, 90, 50]

// let nilai_binary = nilai.map(convertBinary)
// function convertBinary(elem) {
//     return elem.toString(2)
// }

let nilai_binary = nilai.map((elem) => {return elem.toString(2)})
console.log(nilai_binary)

let nilai_grade = nilai.map((n) => {
    if (n >= 80 && n <= 100){
        return 'A'
    } else if (n >= 60 && n < 80){
        return 'B'
    } else if (n >= 40 && n < 60){
        return 'C'
    } else if (n >= 20 && n < 40){
        return 'D'
    } else {
        return 'F'
    }
})
console.log(nilai_grade)

// diberikan sebuah array isi buah
let fruits = ["apple", "banana", "orange"]
let cut_fruits = fruits.map((fruit) => {return `cut ${fruit}`})
console.log(cut_fruits)


// FILTER
let nilai_lulus = nilai.filter((n, i, arr) => {
    return (n >= 50 && n <= 70)
})
console.log(nilai_lulus)

let list_angka_plat = [8654, 7452, 6551, 31, 4587]
let plat_genap = list_angka_plat.filter((plat) => {
    return plat % 2 === 0
})
let plat_ganjil = list_angka_plat.filter((plat) => {
    return plat % 2 === 1
})
console.log(plat_genap)
console.log(plat_ganjil)


let list_barang = [
    {nama: "pen faster", kategori: "alat tulis", harga: 12500},
    {nama: "buku tulis", kategori: "alat tulis", harga: 15500},
    {nama: "bantal", kategori: "barang rumah tangga", harga: 125000},
]
// filter khusus alat tulis
let alat_tulis = list_barang.filter((item)=>{
    return item['kategori'] === 'alat tulis'
})
console.log(alat_tulis)


// REDUCE
let bali = [
    { regency:'Jembrana', population: 114863},
    { regency:'Tabanan', population: 209308},
    { regency:'Badung', population: 277536},
    { regency:'Gianyar', population: 208443},
    { regency:'Klungkung', population: 79233},
]

let populasi_bali = bali.reduce((total, daerah) => {
    return total + daerah['population']
}, 0)
let daerah_bali = bali.reduce((str, daerah, i, arr) => {
    if (i === 0) {
        return str + " " + daerah['regency']
    } else {
        return str + ", " + daerah['regency']
    }
}, "Daerah di bali:")
console.log(populasi_bali)
console.log(daerah_bali)

function hello (param) {
    return "hello " + param
}
//----------------------------------------------------------------
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
//---------------------------------------------------------------------