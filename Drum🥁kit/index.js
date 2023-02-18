//interecting with cursor when clicked 

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        const buttoninnerHTML=this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    });

}

//Intereacting with keyboard when pressed

document.addEventListener("keydown", 
function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}
);

//function to make sound when clicked or pressed

function makeSound(key){
    switch(key){
        case"w":
            const w= new Audio("sounds/tom-4.mp3");
            w.play();
         break;
        case"a":
            const a= new Audio("sounds/tom-3.mp3");
            a.play();
         break; 
        case"s":
            const s= new Audio("sounds/tom-2.mp3");
            s.play();
         break;
        case"d":
            const d= new Audio("sounds/tom-1.mp3");
            d.play();
         break;
        case"j":
            const j= new Audio("sounds/snare.mp3");
            j.play();
         break;
        case"k":
            const k= new Audio("sounds/kick-bass.mp3");
            k.play();
         break;
        case"l":
            const l= new Audio("sounds/crash.mp3");
            l.play();
         break;

        default: console.log(Event.key);
        break;
            
    };
};

//Function for animation when got clicked or pressed.

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
       activeButton.classList.remove("pressed");
    },100);
}