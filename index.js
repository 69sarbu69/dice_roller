var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage=randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2)
{
    var text1=document.querySelectorAll("h1")[0];
    text1.innerHTML="🇳🇵Player 1 Wins!!";

}

else if(randomNumber1<randomNumber2)
{

    var text1=document.querySelectorAll("h1")[0];
    text1.innerHTML="Player 2 Wins!!🇳🇵";

}

else
{
    var text1=document.querySelectorAll("h1")[0];
    text1.innerHTML="🇳🇵DRAW!!🇳🇵";
 
}