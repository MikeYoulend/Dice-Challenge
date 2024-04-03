function randomNumber1(){
    //Math.floor arrotonda all'intero più vicino
    //Math.random() ti da un numero tra 0 e 1(moltiplicato per 6 tra 0 e 5) + 1(tra 1 e 6)
    let randomNumber = Math.floor(Math.random() * 6 ) + 1; //1-6
    console.log(randomNumber);

    let randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png
    let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //Prendo la prima img[0]
    return randomNumber;
}


function randomNumber2(){
    //Math.floor arrotonda all'intero più vicino
    //Math.random() ti da un numero tra 0 e 1(moltiplicato per 6 tra 0 e 5) + 1(tra 1 e 6)
    let randomNumber = Math.floor(Math.random() * 6 ) + 1; //1-6
    console.log(randomNumber);

    let randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png
    let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource); //prendo la seconda img[1] 
    return randomNumber;
}


let number1 = randomNumber1();
let number2 = randomNumber2();

if(number1 > number2){
    document.querySelector("h1").innerHTML = "Hai vinto";
} else if (number1 < number2){
    document.querySelector("h1").innerHTML = "Hai Perso"
} else {
    document.querySelector("h1").innerHTML = "Pareggio"
}
