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
        document.getElementById("list-makanan").innerHTML += `<li>${makanan_favorit[i]["nama"]}: ${makanan_favorit[i]["harga"]}</li>`
    }