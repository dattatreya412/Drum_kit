var sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        palyAudio(this.innerHTML);
        detectPress(this.innerHTML);

    });


}

document.addEventListener("keydown", function(event) {
    palyAudio(event.key);
    detectPress(event.key);

});

function palyAudio(key) {

    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("Error : got - > " + key);
            break;
    }
}


function detectPress(key) {
    document.querySelector("." + key).classList.toggle("pressed");
    document.querySelector("body").classList.toggle("b" + key);
    setTimeout(function() {
        document.querySelector("." + key).classList.toggle("pressed");
        document.querySelector("body").classList.toggle("b" + key);
    }, 100);
}