function randomNumber1(){
    //Math.floor arrotonda all'intero più vicino
    //Math.random() ti da un numero tra 0 e 1(moltiplicato per 6 tra 0 e 5) + 1(tra 1 e 6)
    let randomNumber = Math.floor(Math.random() * 6 ) + 1; //1-6
    console.log(randomNumber);

    let randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png
    let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
}

randomNumber1();

function randomNumber2(){
    //Math.floor arrotonda all'intero più vicino
    //Math.random() ti da un numero tra 0 e 1(moltiplicato per 6 tra 0 e 5) + 1(tra 1 e 6)
    let randomNumber = Math.floor(Math.random() * 6 ) + 1; //1-6
    console.log(randomNumber);

    let randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png
    let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
}

randomNumber2();