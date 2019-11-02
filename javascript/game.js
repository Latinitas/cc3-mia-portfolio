/*----- constants -----*/
const winningCombos = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const message = document.querySelector('h2')
const resetButton = document.getElementById('reset-button');


/*----- event listeners -----*/


document.getElementById('board').addEventListener('click', handleTurn);
resetButton.addEventListener('click', init);
console.log(resetButton)

/*----- functions -----*/
function getWinner() {
    // loop over the winning combos array and compare the marks to see if they match up with the winning combos
    let winner = null;
    winningCombos.forEach(function (combo) {
        if ( board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) { 
            winner = board[combo[0]]; 
        }
    });

    if (winner) {
        return winner;
    } else if (board.includes('')) {
        return null
    } else {
        return 'T'
    }
};


function handleTurn() {
    let idx = squares.findIndex(function (square) {
        return square === event.target;
    });
    board[idx] = turn;
    win = getWinner();
    console.log(win)
    render();
    // this is a ternanry 
    turn = (turn === "X") ? "O" : "X"
    message.textContent = getText()

};

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
render();
};

const getText = () => {
    console.log('getting text!')
    // this function checks for a winner and returns a message as a string. 
    // If the winner is 'T' then the message will be 'It's a tie!
    let text = ''
    if (win === 'T'){
        text = "That's a tie!"
    }else if (win === 'X' || win === 'O') {
        text = `${win} wins the game!`
    }else {
        // this uses a template literal
        text = `It's ${turn}'s turn!`
    }
    return text;
}
    
  

function render() {
    board.forEach(function (mark, index) {
        //this moves the value of the board item into the squares[idx]
        squares[index].textContent = mark;
    });
    
}
init();