
function gameReset(grid, board){
    //make button appear
    const btn = $('#announceWinner').after('<button id="resetBtn">Reset Game</button>');
    
    $('#resetBtn').on("click", function(e){
        console.log(grid);
        console.log(board);

        for(let i = 0; i < board.length; ++i){
            board[i] = '';
            console.log('this worked');
        }
        console.log(board);

        for(let i = 0; i < grid.length; ++i){
            console.log(grid[0].classList);
        }
        
    });
    // console.log(grid);
    // console.log(board);
    // console.log(grid[0].classList)

}

function checkWinner(Player, item1, item2){
    let grid = document.querySelectorAll('.cell')    
    let board = Array.from(grid).map(cell => cell.innerHTML);
    // console.log(board);

    const winningCombos = [
        //horizontal
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //vertical
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //diagonal
        [0,4,8],
        [2,4,6],
    ];

    // winningCombos.forEach(combo => {
    //     if (board[combo[0]] == item1 && board[combo[1]] == item1 && board[combo[2]] == item1){
    //         // console.log(`Player ${Player+1} wins!`);
    //         document.getElementById('announceWinner').innerHTML = (`Player 1 wins!`);
    //         document.getElementById('board').style.pointerEvents = 'none';
    //         gameReset(grid, board);
    //     }else if (board[combo[0]] == item2 && board[combo[1]] == item2 && board[combo[2]] == item2){
    //         // console.log(`Player ${Player+1} wins!`);
    //         document.getElementById('announceWinner').innerHTML = (`Player 2 wins!`);
    //         gameReset(grid, board);
    //     }else{
    //         document.getElementById('announceWinner').innerHTML = (`no winner`);
    //         gameReset(grid, board);
    //     }
    // })


    if(Player == 0){ //if player 1, check item 1
        winningCombos.forEach(combo => {
            if (board[combo[0]] == item1 && board[combo[1]] == item1 && board[combo[2]] == item1){
                // console.log(`Player ${Player+1} wins!`);
                document.getElementById('announceWinner').innerHTML = (`Player ${Player+1} wins!`);
                document.getElementById('board').style.pointerEvents = 'none';
                gameReset(grid, board);
            }
        })
    }else if(Player == 1){ //if player 2, check item 2
        winningCombos.forEach(combo => {
            if (board[combo[0]] == item2 && board[combo[1]] == item2 && board[combo[2]] == item2){
                // console.log(`Player ${Player+1} wins!`);
                document.getElementById('announceWinner').innerHTML = (`Player ${Player+1} wins!`);
                gameReset(grid, board);
            }
        })
    }else{ //need 
        document.getElementById('announceWinner').innerHTML = (`no winner`);
        gameReset(grid, board);
    }

    
    /**
     * check for an actual winner since we have our game board...
     * 
     * horizontal
     * vertical
     * diagonal
     * 
     * look into the .every() method if you want a 1 liner
     * you can also use 98 if statements
     * or, consolidate to less using if/else
     * 
     * array of winning combos? 
     * 
     */
}

(function($, undefined) {
    'use strict'
    
    $(document).ready(function() {
      const $game = $('#board');
    //   const playerX = 'x';
    //   const playerO = 'o';
      const playerX = '<i class="bi bi-brightness-high"></i>';
      const playerO = '<i class="bi bi-moon"></i>'
      let currentPlayer = 0;
  
      $game.on('click', '.cell', (e) =>{
        const $cell = $(e.target).closest('.cell');
        // console.log($cell);
        if(!$cell.hasClass('full')){
            if(currentPlayer === 0) { //check which player is playing 
            $cell.append(playerO);
            $cell.addClass('full');
            checkWinner(currentPlayer, playerO, playerX);
            currentPlayer++;
            }else{
            $cell.append(playerX);
            $cell.addClass('full');
            checkWinner(currentPlayer, playerO, playerX);
            currentPlayer--;
            }
        }else{
            return null;
        }
      });
    });  

    
  })(jQuery);