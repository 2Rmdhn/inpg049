function hideSection(){
    document.getElementById("editform").style.display = "none"
}

function showSection(){
    document.getElementById("editform").style.display = "block"
}

function showForm(){
    var nama = document.getElementById("Nama").value
    var role = document.getElementById("Role").value
    var availability = document.getElementById("Availability").value
    var usia = document.getElementById("Usia").value
    var lokasi = document.getElementById("Lokasi").value
    var pengalaman = document.getElementById("Pengalaman").value
    var email = document.getElementById("Email").value

    document.getElementById("Newnama").innerHTML = nama
    document.getElementById("Newrole").innerHTML = role
    document.getElementById("Newava").innerHTML = availability
    document.getElementById("Newusia").innerHTML = usia
    document.getElementById("Newlokasi").innerHTML = lokasi
    document.getElementById("Newexp").innerHTML = pengalaman
    document.getElementById("Newemail").innerHTML = email
}