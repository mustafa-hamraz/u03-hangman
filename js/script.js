///*****     Login Section     *****///
//keeps everything hidden until there is a user name given
let loginSection = document.getElementById('login');
let helpSection = document.getElementById('help-section');
let instructionSection = document.getElementById('instraction-section');
let gameSection = document.getElementById('game-section');
helpSection.style.display = "none";
instructionSection.style.display = "none";
gameSection.style.display = "none";


//submites player's name by pushing EnterKey
let userName = document.getElementById('nameinput');
userName.addEventListener(
    "keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('greetings-button').click();
        }
    }
);

//function which saves Player's name
function greetings(){
    userName = document.getElementById('nameinput').value; //gets player's input
    
    if(userName.length > 0){
        loginSection.style.display = "none"; //hides the login section
        helpSection.style.display = "block"; //shows the main section
    }
    let welcomeUser = document.getElementById('welcome-username'); //Saves content from HTML element
    welcomeUser.innerText = "Hej " + userName + "! Zlatan behöver din hjälp!"; //change the element
}









///*****     Help Section     *****///
function yesFunction(){
    helpSection.style.display = "none";
    instructionSection.style.display = "block";
}
function noFunction(){
    helpSection.style.display = "none";
    loginSection.style.display = "block";
}









///*****     Instraction Section     *****///
