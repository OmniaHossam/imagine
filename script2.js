/* search for a number */
let arr=['images/p3-1.jpeg', 'images/p3-2.jpg','images/p3-3.jpeg','images/p3-4.webp'];
let imgSrc=arr[Math.floor(Math.random()*4)];
    document.getElementById('im').src=imgSrc;
let searchedNumber=()=>{
   let num=document.getElementById('nm').value;
   if(num==arr.indexOf(imgSrc))
   {
    alert('you got it');
    document.getElementById('dis').innerHTML='Well done <br> <button id=\'pa\' class=\'btn btn-info\'>Play Again</button>';
    document.getElementById('pa').addEventListener('click', playAgain);
   }
   else{
    alert('You wronged it, search again')
   }

}
let playAgain=()=>{
   
    location.reload()
}
document.getElementById('btp3').addEventListener('click',searchedNumber);

/* thank you */
document.getElementById('thank').addEventListener(('click'),()=>{
    document.getElementById('thank').innerHTML='thanks for your time'
})