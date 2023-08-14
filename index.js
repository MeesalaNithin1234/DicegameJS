var randomNumber1 = Math.floor(Math.random() * 6)  +1;

var randomdiceimg = "dice" + randomNumber1 + ".png";

var randomdicesrc = "images/" + randomdiceimg ;

 var img1 = document.querySelectorAll("img")[0];

    img1.setAttribute("src" , randomdicesrc);

    

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomdiceimg2 = "dice" + randomNumber2 + ".png";

    var randomdicesrc2 = "images/" +randomdiceimg2;

    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src" , randomdicesrc2);



    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent = "🚩Player 1 Wins🚩";
    }else if (randomNumber1<randomNumber2){
        document.querySelector("h1").textContent = "💀Player 2 Wins💀";
    } 
    else {
        
            document.querySelector("h1").textContent = "🧑DRAW🧑";
    }