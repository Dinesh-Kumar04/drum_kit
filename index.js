const size = document.querySelectorAll('.drum').length;

// Event for mouse click
for(let i = 0; i < size; i++){
    const btn = document.querySelectorAll('button')[i];
    btn.addEventListener('click', function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// Event for keypress
document.addEventListener('keydown', function(Event){
    makeSound(Event.key);
    buttonAnimation(event.key);
})

// Animation for buttons
function buttonAnimation(curentkey){
    var anim = document.querySelector(`.${curentkey}`);
    anim.classList.add('pressed');
    setTimeout(function(){
        anim.classList.remove('pressed');
    }, 100);
}

// Function to take input from mouse and keypress
function makeSound(key){
    switch(key){
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    }
}