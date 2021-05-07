var randomNuber1=Math.floor(Math.random()*7);
var randomNuber2=Math.floor(Math.random()*7);
console.log(randomNuber1);
if(randomNuber1){
    document.querySelector('.img1').setAttribute('src',`images/dice${randomNuber1}.png`);
}
if(randomNuber2){
    document.querySelector('.img2').setAttribute('src',`images/dice${randomNuber2}.png`);
}
if(randomNuber1>randomNuber2){
document.querySelector('.container h1').innerHTML='Player 1 wins!';
}
else if(randomNuber1<randomNuber2){
    document.querySelector('.container h1').innerHTML='Player 2 wins!';
    }
    else{
        ocument.querySelector('.container h1').innerHTML='Its Draw!';
    }