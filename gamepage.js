// generation of random value
var y = Math.floor(Math.random() *10 + 1);
// count of attempts
var x = document.getElementById("guessField").value;

if(x == y)
{
  alert("CONGRATULATIONS!!!" +playername+ "     YOU GUESSED IT RIGHT IN "
  + guess + "GUESS")
}
// until hit
else if (x > y)

{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
// function for the number sent by the user
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
