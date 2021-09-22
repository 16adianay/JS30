
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if its not a transform
    e.target.classList.remove('playing');
    console.log(this);
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key  = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function running

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
