//              ***********     LOGIN SECTION     ***********
// Håller allt döld till användaren skriver ett namn
let loginSection = document.getElementById('login');
let helpSection = document.getElementById('help-section');
let instructionSection = document.getElementById('instraction-section');
let gameSection = document.getElementById('game-section');
let soundSection = document.getElementById('sound');
let tryAgain = document.getElementById('try-again');
let winningPage =  document.getElementById('game-win');
helpSection.style.display = "none";
instructionSection.style.display = "none";
gameSection.style.display = "none";
soundSection.style.display = "none";
tryAgain.style.display = "none";
winningPage.style.display = "none";

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
    mainGame(); 
}





//               ***********     MAIN GAME SECTION     ***********
function mainGame(){
    const wordList = ["FINLAND", "ITALIEN", "TYSKLAND", "SPANIEN", "POLEN", "LETTLAND"];    // Array med spelets alla ord
    let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];              // Slumpgenerator från arrayen ovan
    let selectedWordArray = [...selectedWord];
    let alphabetPosition = [];
    let screenSymbols = [];
    let win = selectedWord.length;
    let gusses = 0;
    

    let ulList = document.getElementById("guess-list"); 
    hidenWord();    //ropar på funktionen som skapar toma rutor

    function hidenWord(){        // Funktion som skapar rutor beroande på antal bokstäverna
        while(ulList.firstChild){
            ulList.removeChild(ulList.firstChild);
        }
        for(i =0; i < selectedWord.length; i++){
            let guessList = document.createElement("LI");                // Skapar en <li> node
            let textGuessLetter = document.createTextNode('🔒');         // Skapar en text node
            guessList.appendChild(textGuessLetter);                     // Appenderar texten i <li>                      
            ulList.appendChild(guessList);     // Appenderar <li> i HTML
            ulList.style.fontSize = "40px";    // Ändrar text storlek
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
        target.style.display = 'none';
        checkForMatch(alphabet);
        
    })

    function checkForMatch(alphabetKey){    //Funktion som kollar om alphabetet finns i dolda ordet
        let trueOrFalse = selectedWordArray.indexOf(alphabetKey);
        if(trueOrFalse != -1){
            document.getElementById('sound1').play();
            findMatchPosition(alphabetKey)
        }else{
            gusses++;
            changeGamePhoto(gusses);
        }
    }

    function findMatchPosition(trueMatch){      //Funktion som hittar positionen för rätta alphabet
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

    function screenSymbolsFunction(){   //Funktion som sparar rätta alfabetet i en array
        for(let i = 0; i < alphabetPosition.length; i++){
            if(alphabetPosition[i] !== '🔒'){
                screenSymbols[i] = alphabetPosition[i];
                win--;
                replaceHidenWord(i);
            } 
        }
        if(win === 0){
            gameWin();
        }
    }

    function replaceHidenWord(index){   //Funktion som visar rätta alfabet till användaren
        let replaceNode = document.getElementById('guess-list').childNodes[index];
        replaceNode.innerText = screenSymbols[index];
    }

    function changeGamePhoto(gussesNumber){     //Funktion som ändrar bild när man gissar fel och spelar ljud
        let gamePhoto = document.getElementById('game-img');
        if(gussesNumber === 0){
            gamePhoto.src = 'img/warning0.png';
        }
        else if(gussesNumber === 1){
            document.getElementById('sound0').play();
            gamePhoto.src = 'img/warning1.png';
            
        }
        else if(gussesNumber === 2){
            document.getElementById('sound0').play();
            gamePhoto.src = 'img/warning2.png';
        
        }
        else if(gussesNumber === 3){
            document.getElementById('sound0').play();
            gamePhoto.src = 'img/warning3.png';
            
        }
        else if(gussesNumber === 4){
            document.getElementById('sound0').play();
            gamePhoto.src = 'img/warning4.png';
        }
        else if(gussesNumber === 5){
            gamePhoto.src = 'img/warning5.png';
            gameOver();
        }
    }
}

function gameOver(){
    document.getElementById('fuckedup').play();
    gameSection.style.display = "none";
    tryAgain.style.display = "block";
}
function gameWin(){
    document.getElementById('woohoo').play();
    gameSection.style.display = "none";
    winningPage.style.display = "block";
}