function hideSection(){
    document.getElementById("editform").style.display = "none"
}

function showSection(){
    document.getElementById("editform").style.display = "block"
}

function saveForm(){
    var nama = document.getElementById(Nama).value;
    var role = document.getElementById(Role).value;
    var availability = document.getElementById(Availability).value;
    var usia = document.getElementById(Usia).value;
    var lokasi = document.getElementById(Lokasi).value;
    var pengalaman = documen.getElementById(Pengalaman).value;
    var email = documen.getElementById(Email).value;

    document.getElementById(Newnama).innerHTML = nama;
    document.getElementById(Newrole).innerHTML = role;
}