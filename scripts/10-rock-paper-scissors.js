    /*
      When we click a button:
      1. Computer randomly selects a move.
      2. Compare the moves to get the result.
      3. Update a score.
      4. Display the result in a popup.
    */
      const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0,
      }
    /*
    if(!score){
      score={
      wins: 0,
      losses: 0,
      ties: 0,
      }
    }
    */
    updateScoreElement();

    function playGame(playerMove){
      //assigns the return value to a var
      let computerMove = pickComputerMove();

        let result ='';
        if(playerMove === 'Scissors'){
            if(computerMove === 'Rock'){
                result = 'You lose.';
            }else if(computerMove ==='Paper'){
                result = 'You win.';
            }else if( computerMove = 'Scissors'){
                result = 'Tie.';
            }
        }else if(playerMove === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'You win.'
            }else if(computerMove ==='Paper'){
                result = 'Tie.'
            }else if( computerMove = 'Scissors'){
                result = 'You lose.'
            }
        }else if(playerMove === 'Rock'){
            if(computerMove === 'Rock'){
            result = 'Tie.'
            }else if(computerMove ==='Paper'){
            result = 'You lose.'
            }else if( computerMove = 'Scissors'){
            result = 'You win.'
            }
        }


      if (result === 'You win.'){
        score.wins +=1;
      } else if(result === 'You lose.'){
        score.losses +=1;
      }else if(result ==='Tie.'){
        score.ties +=1;
      }

      //(name, value)
      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = `${result}`;

      document.querySelector('.js-moves').innerHTML = `You 
          <img src="./imgs/${playerMove}-emoji.png" alt="playerMove" class="move-icon">
          <img src="./imgs/${computerMove}-emoji.png" alt="computerMove" class="move-icon">
          Computer`; 
    }

    function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = "";
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissors";
      }
      return computerMove;
    }