function ComputerPlay() 
{
    let max=2,min=0;
    let ra = Math.floor(Math.random()*(max-min+1)) + min;
    let arr = ['Rock','Paper','Scissors'];
    return arr[ra];
}

function game()
{
    let pscore = 0;
    for (let i=1; i<=5;i++)
    {
        alert(`Round ${i}`);
        let ps = prompt("Enter Rock, Paper or Scissors");
        let cs = ComputerPlay();
        alert (`Computer chose ${cs}`);
function playRound(ps,cs)
{
if (ps=='Paper' && cs == 'Rock' || ps=='Rock' && cs=='Scissors' || ps=='Scissors' && cs=='Paper')
{pscore++;alert ("You Win!");}
else
alert ("You Lose!");
}
playRound(ps,cs);
    }
if (pscore >=3)
alert (`Congratulations! You won in ${pscore}/5 games against Computer!`);
else
alert (`Sorry! You lost in ${5-pscore}/5 games against Computer!`);
}

game();