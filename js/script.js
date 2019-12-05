///*****     Login Section     *****///

//keeps everything hidden until there is a user name given
let instructionSection = document.getElementById('instruction-section');
let gameSection = document.getElementById('game-section');
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
    let loginSection = document.getElementById('login');
    if(userName.length > 0){
        loginSection.style.display = "none"; //hides the login section
        instructionSection.style.display = "block"; //shows the main section
    }
}









///*****     Instruction Section     *****///

