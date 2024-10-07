const imgBr = document.querySelector(".img-broken");
let seq = '';
const sound = document.getElementById("bug");

document.addEventListener('keydown', function(event) {
    seq += event.key;
    console.log(seq);

    if (seq === "CODE1234") {
        imgBr.classList.add('img-broken-active');
        sound.play();
    } else if (!"CODE1234".startsWith(seq)) {
        seq = '';
    }
});