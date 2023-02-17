document.querySelectorAll('img').forEach((item) =>{

    item.addEventListener("click",handleAction);
})

function handleAction(){

    //random number between 1 to 6
    var randomNumber1=Math.floor(Math.random()*6)+1;
    
    var randomDiceImage="dice" + randomNumber1 + ".png";
    
    var randomImageSource="images/"+ randomDiceImage;
    
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
    
    //random no for 2nd image.
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player 1🚩wins";
    }
    else if (randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2🚩wins";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
};