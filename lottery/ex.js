let randomNumber, playerNumber, attemptPrize;
let prize = 0; let attempt = 3; const winLoseCoef = 2;
let addPoket = 4; let gamePoket = 8; let resetPoket = 8;
let maxPrize = 100;
let playGame = confirm('Do you want to play a game?');
if (playGame) {
    while (attempt >= 0) {
            switch (attempt) {
            case 3:
                randomNumber = Math.floor(Math.random() * (gamePoket + 1));
                console.log(randomNumber);
                attemptPrize = maxPrize;
            case 2:
            case 1:
                playerNumber = +prompt('Choose a roulette pocket number from 0 to ' + gamePoket +
                    '\n Attempts left: ' + attempt +
                    '\n Tottal prize: ' + prize +
                    '$ \n Possible prize on current attempt ' + attemptPrize + '$', '');
                    attempt--;
                break;
            case 0:
                alert('Thank you for your participation. Your prize is: ' + prize + '$');
                    prize = 0;
                    maxPrize = 100;
                gamePoket = resetPoket;
                confirm('Do you want play again?') ? attempt = 3 : attempt = -1;
                break;
            default:
                break;
        }
        switch (true) {
            case randomNumber === playerNumber:
                prize += attemptPrize;
                gamePoket += addPoket;
                maxPrize *= winLoseCoef;
                alert('Congratulation, you won!   Your prize is: '
                    + prize + '$.');
                confirm('Do you want to continue?') ? attempt = 3 : attempt = -1;
                break;
            case randomNumber !== playerNumber:
                attemptPrize /= winLoseCoef;
                break;
            default:
                break;
        }
    }
}
alert('You did not become a billionaire, but can.');



