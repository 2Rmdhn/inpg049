function loadData() {
    // ambil data dari API
    // pakai fetch
    fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        .then(response => response.json())
        .then(data => {
            let arr = data.data
            let prov = document.getElementById(`provinsi`)
            for(let i = 0 ; i<arr.length; i++){
                let arri = arr[i]
                let tr = document.createElement(`tr`)

                let td4 = document.createElement(`td`)
                td4.innerHTML += `${i+1}`
                tr.appendChild(td4)

                let td = document.createElement(`td`)
                td.innerHTML += `${arri[`provinsi`]}`
                tr.appendChild(td)
                
                let td1 = document.createElement(`td`)
                td1.innerHTML += `${ arri[`kasusPosi`]}`
                tr.appendChild(td1)

                let td2 = document.createElement(`td`)
                td2.innerHTML += `${ arri[`kasusSemb`]}`
                tr.appendChild(td2)

                let td3 = document.createElement(`td`)
                td3.innerHTML += `${ arri[`kasusMeni`]}`
                tr.appendChild(td3)
                prov.appendChild(tr)
            }        
        })

}