//              ***********     LOGIN SECTION     ***********
// Håller allt döld till användaren skriver ett namn
let loginSection = document.getElementById('login');
let helpSection = document.getElementById('help-section');
let instructionSection = document.getElementById('instraction-section');
let gameSection = document.getElementById('game-section');
helpSection.style.display = "none";
instructionSection.style.display = "none";
gameSection.style.display = "none";

// Submites spelarens namn med Enter knappen
let userName = document.getElementById('nameinput');
userName.addEventListener(
    "keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('greetings-button').click();
        }
    }
);


function greetings(){                       // Funktion som sparar spelarens namn
    userName = document.getElementById('nameinput').value; //gets player's input
    
    if(userName.length > 0){
        loginSection.style.display = "none"; //hides the login section
        helpSection.style.display = "block"; //shows the main section
    }
    let welcomeUser = document.getElementById('welcome-username'); //Saves content from HTML element
    welcomeUser.innerText = "Hej " + userName + "! Zlatan behöver din hjälp!"; //change the element
}





//              ***********     HELP SECTION     ***********
function yesFunction(){
    helpSection.style.display = "none";
    instructionSection.style.display = "block";
}
function noFunction(){
    helpSection.style.display = "none";
    loginSection.style.display = "block";
}





//              ***********     INSTRACTION SECTION     ***********
function startGame(){
    instructionSection.style.display = "none";
    gameSection.style.display = "block";
    hidenWord(); //ropar på funktionen som skapar toma rutor

}





//               ***********     MAIN GAME SECTION     ***********

const wordList = ["FINLAND", "ITALIEN", "TYSKLAND", "SPANIEN", "POLEN", "LETTLAND"];    // Array med spelets alla ord
let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];              // Slumpgenerator från arrayen ovan
let selectedWordArray = [...selectedWord];
let alphabetPosition = [];
let screenSymbols = [];
let gusses = 0;


let ulList = document.getElementById("guess-list"); 
function hidenWord(){        // Funktion som skapar rutor beroande på antal bokstäverna
    while(ulList.firstChild){
        ulList.removeChild(ulList.firstChild);
    }
    for(i =0; i < selectedWord.length; i++){
        let guessList = document.createElement("LI");                // Skapar en <li> node
        let textGuessLetter = document.createTextNode('🔒');         // Skapar en text node
        guessList.appendChild(textGuessLetter);                     // Appenderar texten i <li>                      
        ulList.appendChild(guessList);     // Appenderar <li> i HTML
        ulList.style.fontSize = "50px";    // Ändrar text storlek
        ulList.style.color = "white";      // Ändrar text färg
    }
    
    for(let i = 0; i < selectedWordArray.length; i++){
        screenSymbols.push('🔒');
    }
}
let alphabet;
let keyList = document.getElementById('key-list');
keyList.addEventListener('click', function(event){
    let target = event.target;
    alphabet = String(target.innerText);
    checkForMatch(alphabet)
})

function checkForMatch(alphabetKey){
    let trueOrFalse = selectedWordArray.indexOf(alphabetKey);
    if(trueOrFalse != -1){
        findMatchPosition(alphabetKey)
    }else{
        gusses++;
    }
}

function findMatchPosition(trueMatch){
    alphabetPosition.length = 0;
    for(let i = 0; i < selectedWordArray.length; i++){
        if(selectedWordArray[i] == trueMatch){
            alphabetPosition.push(alphabet);
        }else{
            alphabetPosition.push('🔒');
        }
    }
    screenSymbolsFunction();
}

function screenSymbolsFunction(){
    for(let i = 0; i < alphabetPosition.length; i++){
        if(alphabetPosition[i] !== '🔒'){
            screenSymbols[i] = alphabetPosition[i];
            replaceHidenWord(i);
        } 
    }
}

function replaceHidenWord(index){
    let replaceNode = document.getElementById('guess-list').childNodes[index];
    replaceNode.innerText = screenSymbols[index];
}

console.log(selectedWord);
