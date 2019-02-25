window.onload = () => {
  document.querySelector('.card').classList.add(randomSuit());
  document.querySelector('.card').innerHTML = (randomNumber());
};

let randomNumber = () => {
    let number = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let indexNumber = Math.floor(Math.random()*number.length);
    return number[indexNumber];
}    
    
let randomSuit = () =>{
    let suit = ['heart','club','spade','diamond'];
    let indexSuit = Math.floor(Math.random()*suit.length);
    return suit[indexSuit];
}