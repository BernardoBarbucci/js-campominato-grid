// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto 
// un messaggio in console con il numero della cella cliccata.

const gridEl = document.querySelector('.main-grid');
const startButtonEl = document.querySelector('button#start-button');
const gameModeEl = document.querySelector('select#select-difficulty');

startButtonEl.addEventListener('click', function(){
    startNewGame(gridEl, gameModeEl)
});

// funzione dove creo i quadratini e creo una griglia
function startNewGame(wrapperEl, modeSelector) {
    wrapperEl.innerHTML = '';

    const mode = parseInt(modeSelector.value);
    let cellsNumb;
    // creo uno switch per implementare piu modalita dentro un unico elemento su js (special thanks goes to 'rc2pc2')
    switch (mode){
        case 0:
        default:
            cellsNumb = 100;
            break;
        case 1:
            cellsNumb = 81;
            break;
        case 2:
            cellsNumb = 49;
            break;
    }
    // 'Math.sqrt'static method returns the square root of a number (source: mdn)
    let squaresRow = Math.sqrt(cellsNumb);
    // ciclo for per generare gli squares
    for (let i = 0; i <= cellsNumb; i++) {
        const singularSquare = createNewSquare();
        const squareContent = i;
        // print su html
        singularSquare.innerHTML += `<span> ${squareContent} </span>`;
        // grnadezza square
        const squareSize = `calc(100% / ${squaresRow})`;
        singularSquare.style.width = squareSize;
        singularSquare.style.height = squareSize;
        // if per cambiare background-color in base 
        if (squareContent % 2 === 0){
            singularSquare.classList.add('bg-black');
        } else {
            singularSquare.classList.add('bg-purple')
        }
        // accendi e spengi ad ogni click
        singularSquare.addEventListener('click', function(){
            singularSquare.classList.toggle('clicked');
            console.log(squareContent);
        })


    }

}


