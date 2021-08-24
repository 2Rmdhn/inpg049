// kondisional

let nilai = 0 // contoh nilai yang false

if (nilai === 0){ // menggunakan komparator === jadi hasilnya true
    // kalau true masuk sini
}

if (nilai){
    // kalau false TIDAK masuk sini
} else {
    // masuknya ke else sini
}

// if else
// case study: tinggi badan untuk naik wahana
let tinggi = 160

if (tinggi > 160){
    alert("saya boleh naik roller coaster")
} else {
    alert("saya lebih baik naik komedi putar")
}

// if, elseif, elseif, ... else
// case study: ke resto mau pesan nasi,
// kalau gk ada, pesan mie, kalau gk ada, pesan burger
// kalau masih gk ada juga, pulang aja
let ada_nasi = false
let ada_mie = true
let ada_burger = false

if (ada_nasi) {
    alert("berhasil pesan nasi")
} else if (ada_mie) {
    alert("berhasil pesan mie")
} else if (ada_burger) {
    alert("berhasil pesan burger")
} else {
    alert("pulang tanpa makan")
}

// cara tulis if diatas dengan bentuk ternary
// tapi cara tulis seperti ini tidak membantu, karena if nya panjang dan jadi sulit dibaca, jadi jangan dipakai
ada_nasi ? alert("berhasil pesan nasi") : ada_mie ? alert("berhasil pesan mie") : ada_burger ? alert("berhasil pesan burger") : alert("pulang tanpa makan")

// LOGICAL OPERATOR (AND && dan OR ||)
let punya_ktp = true
let punya_sim = false

// case study: kalau punya KTP dan SIM, 
// boleh sewa mobil
if (punya_ktp && punya_sim){
    alert("saya boleh beli tiket")
} else {
    alert("saya TIDAK boleh beli tiket")
}

// cara tulis if diatas dengan bentuk ternary
// bentuk if yang simpel seperti ini boleh dijadikan ternary
(punya_ktp && punya_sim) ? alert("saya boleh beli tiket") : alert("saya TIDAK boleh beli tiket")

// case study: kalau punya KTP atau SIM, 
// boleh beli tiket
if (punya_ktp || punya_sim){
    alert("saya punya salah satu ktp atau sim")
}


// bagaimana kalau kita mau cek hal yang berbeda? nested if
// case study: kalau punya KTP, bisa masuk ke taman bermain
// kalau tinggi nya diatas 160, bisa naik roller coaster
let ktp = true
let tinggi_badan = 160

if (ktp) {
    alert("bisa masuk ke taman bermain")
    if (tinggi_badan > 160) {
        alert("bisa naik roller coaster")
    }
} else {
    alert("TIDAK bisa masuk ke taman bermain, karena tidak punya KTP")
}


// operator == dan ===
// == cek value saja, jadi
if (10 == "10"){ //dianggap true

} 
// === cek tipe data juga, jadi
if (10 === "10"){ //dianggap false

} 
//------------------------------------------------------------
// loop

// counted loop, mengulang hal yang sama x kali, kita tau berapa kali
// contoh: tulis ulang "saya tidak akan telat" 10 kali
for (let count = 0; count < 10; count++) {
    console.log(`saya tidak akan telat`)
}

// contoh: hitung mundur 100 detik
for (let detik = 100; detik > 0; detik--) {
    // ini hitung mundur
    console.log(`sisa ${detik} detik lagi`)
}

// uncounted loop, mengulang hal yang sama sampai kondisinya selesai (jadi false)
// contoh: sikat sampai bersih (kita tidak tahu perlu disikat berapa kali)
let cek_kebersihan = "kotor"

let count_sikat = 0
let jumlah_sikat_untuk_bersih = Math.floor(Math.random() * 10)
while (cek_kebersihan === "kotor") {

    // count_sikat = count_sikat + 1
    // count_sikat += 1
    count_sikat++

    console.log(`masih kotor, sudah disikat ${count_sikat} kali`)

    if (count_sikat >= jumlah_sikat_untuk_bersih) {
        cek_kebersihan = "bersih"
    }
}

do {
    // code disini
} while (cek_kebersihan === "kotor")



// forEach
// dokumentasi ada di https://www.w3schools.com/jsref/jsref_foreach.asp
// perulangan for khusus untuk array
let nama_murid = ["Salman", "Shabiqa", "Dwi", "Emir"]
// kita mau bilang selamat malam ke semua murid di kelas

for (nama in nama_murid) { // for in, dapetnya index dari array nya
    console.log(`selamat malam ${nama}`)
}

console.log("-----")

for (nama of nama_murid) { // for of
    console.log(`selamat malam ${nama}`)
}

console.log("-----")

nama_murid.forEach(salam) // metode Array forEach
function salam(nama) {
    console.log(`selamat malam ${nama}`)
}

console.log("-----")

for (let i = 0; i < nama_murid.length; i++) { // for loop biasa
    let nama = nama_murid[i]
    console.log(`selamat malam ${nama}`)
}

// metode String repeat https://www.w3schools.com/jsref/jsref_repeat.asp
// contoh: tulis ulang "saya tidak akan telat" 10 kali
let str = `saya tidak akan telat\n`
console.log(str.repeat(10))


// contoh nested loop
// mau masak 10 bungkus indomie, pancinya cuma 1
for (let i = 0; i < 10; i++) {
    console.log("masak indomie")
    // nunggu mateng 3 menit
    for (let menit = 3; menit > 0; menit--) {
        console.log("nunggu mateng")
    }
}


// kalau kena forever loop, di terminal, tekan Ctrl + c

// `${}` cara tulis template literal string



// Challenge 1: tampilkan 'Halo saya orang ke URUTAN'
let urutan = 1
while (urutan <= 20) {
    console.log(`Halo, saya orang ke ${urutan}`)
    urutan++
}

for (let urutan = 1; urutan <= 20; urutan++) {
    console.log(`Halo, saya orang ke ${urutan}`)
}

// Challenge 2: tampilkan orang yang urutannya ganjil saja

for (let urutan = 1; urutan <= 20; urutan++) {
    // penggunaan modulo mendapatkan sisa dari pembagian. jika sisa 1 setelah dibagi 2, angkanya ganjil.
    if (urutan % 2 === 1) { 
        console.log(`Halo, saya orang ke ${urutan}`)
    }
}

// Challenge 3: buat perulangan yang menampilkan OOOO mengikuti jumlah num

// saat num = 4
/**
 * OOOO
 * OOOO
 * OOOO
 * OOOO
 */


// saat num = 5
/**
 * OOOOO
 * OOOOO
 * OOOOO
 * OOOOO
 * OOOOO
 */

// pakai cara for loop biasa, nested loop
// let num = 6
// let text = ""
// for (let i = 0; i < num; i++){
//     let baris = "" // nanti mau diisi O sebanyak yang num kasih
//     for (let j = 0; j < num; j++) {
//         baris += "O"
//     }
//     text += baris + '\n'
// }
// console.log(text)

// pakai cara repeat
let num = 10
let text = ""
for (let i = 0; i < num; i++){
    text += "O".repeat(num) + '\n'
}
console.log(text)