/* guess a number*/
let random=Math.floor(Math.random()*11);
let oldBtnValue=document.getElementById('result').innerHTML;

let guessNumber =()=>{
    let txt=document.getElementById('txt').value;

    if(txt>random)
    {
        
        document.getElementById('result').innerHTML+='Get Lower <br>';
    }
    else if(txt< random)
    {  
        document.getElementById('result').innerHTML+='Get Higher<br>';
    }
    else 
    {  
          document.getElementById('show').style.display='none';
        document.getElementById('result').innerHTML='Well Done, you gussed it <br> <button id=\'pa\' class=\'btn btn-info\'>Play Again</button>';
        document.getElementById('pa').addEventListener('click', playAgain);
    }
}
let playAgain=()=>{
   
    location.reload()
}
document.getElementById('bt').addEventListener('click',guessNumber);




