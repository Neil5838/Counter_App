//counter number
const magicNumber = document.getElementById('magic-number');
//buttons
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

let counter = 0;
magicNumber.innerHTML = counter;

incrementBtn.addEventListener('click', function() {
    counter++;
    magicNumber.innerHTML = counter;
});

decrementBtn.addEventListener('click', function() {
    counter--;
    magicNumber.innerHTML = counter;
});

resetBtn.addEventListener('click', function() {
    counter = 0;
    magicNumber.innerHTML = counter;
});
