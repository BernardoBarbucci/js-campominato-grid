// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const gridEl = doument.querySelector('main .container div.main-grid');
const startButtonEl = document.querySelector('button#start-button');
const gameModeEl = document.querySelector('select#select-difficulty');

startButtonEl.addEventListener('click', function(){
    startNewGame(gridEl, gameModeEl)
});

// funzione dove creo i quadratini e creo una griglia
function startNewGame(gridEl, gameModeEl) {
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

    


}


// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto 
    // un messaggio in console con il numero della cella cliccata.