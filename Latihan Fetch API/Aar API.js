const data = {
    provinsi: [
        { id: 1, nama_provinsi: 'DKI Jakarta' }, // index 0
        { id: 2 }, // index 1
        { id: 3 },
        { id: 4 },
    ],
};

// akses langsung ke index tertentu itu jarang
console.log(Object.keys(data));
let tbodyElement = document.getElementById('my-tbody');

// Menggunakan string metode
function methodByString() {
    let stringElements = '';
    for (let i = 0; i < data.provinsi.length; i++) {
        // console.log(data.provinsi[i]);

        let stringRow = `
            <tr>
                <td>${data.provinsi[i].id}</td>
                <td>${data.provinsi[i].nama_provinsi}</td>
            </tr>
        `;

        stringElements += stringRow;
    }

    console.log(stringElements);
    return stringElements;
}

tbodyElement.innerHTML = methodByString();

{/* <tbody>
    <tr></tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
</tbody> */}


// Menggunakan DOM Manipulation

{/* <tr>
    <td>1</td>
    <td>DKI Jakarta</td> 
</tr> */}
function methodByDOM() {
    for (let i = 0; i < data.provinsi.length; i++) {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerText = data.provinsi[i].id;
        tr.appendChild(td);

        let td1 = document.createElement('td');
        td1.innerText = data.provinsi[i].nama_provinsi;
        tr.appendChild(td1);

        tbodyElement.appendChild(tr);
    }
}

// function buttonHandler(){
//     let someElement = document.getElementById('my-element');
//     // alay kocak aneh
//     someElement.classList.add('aneh'); // tambah class
//     someElement.classList.contains('aneh'); // hasilnya boolean
//     someElement.classList.remove('aneh'); // remove class
//     someElement.classList.toggle('aneh'); // remove class

//     if(someElement.classList.contains('aneh')){
//         someElement.classList.toggle('aneh'); // remove class
//         // or
//         someElement.classList.add('aneh'); // tambah class

//     } 

// }