// fungsi PopUp
let popup = document.getElementById(`popup`);
let btn = document.getElementById(`btn`);
let exit = document.getElementsByClassName(`tutup`)[0];

btn.onclick = function() {
  popup.style.display = `block`;
}
exit.onclick = function() {
  popup.style.display = `none`;
}
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = `none`;
  }
}