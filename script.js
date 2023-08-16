//Establish variables
var button = document.querySelector("button");
var buttons = document.querySelectorAll("button");
    
//add Event listener to all buttons
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        animation(buttonClicked);
    });
}

//Event Listener to all key presses
document.addEventListener("keypress", function (e) {
    var keyPressed = e.key.toUpperCase();
    makeSound(keyPressed);
    animation(keyPressed);
});

//create play audio function 
function makeSound(key) {
    switch (key) {
        case "W":
            var clap = new Audio('./assets/mp3/clap.mp3');
            clap.play();
            break;
        
        case "A":
            var tom1 = new Audio('./assets/mp3/tom1.mp3');
            tom1.play();
            break;

        case "J":
            var tom2 = new Audio('./assets/mp3/tom2.mp3');
            tom2.play();
            break;
            
        case "S":
            var hihat = new Audio('./assets/mp3/hihat.mp3');
            hihat.play();
            break;    
        
        case "D":
            var snare = new Audio('./assets/mp3/snare.mp3');
            snare.play();
            break;   
        
        case "K":
            var snap = new Audio('./assets/mp3/snap.mp3');
            snap.play();
            break;    
            
        case "L":
            var kick = new Audio('./assets/mp3/kick.mp3');
            kick.play();
            break;   
    
        default:
            break;
    }

}

function animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}