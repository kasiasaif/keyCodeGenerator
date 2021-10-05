const first = document.getElementById('first');
const gen = document.getElementById('gen');
const heading = document.getElementById('keycode');

function keycode(event){

const key = event.key;
const which = event.which;
const code = event.code;
heading.textContent = which;
document.getElementById("eventKey").innerHTML = key;
document.getElementById("eventWhich").innerHTML = which;
document.getElementById("eventCode").innerHTML = code;
gen.classList.remove("stage");
first.remove()
}