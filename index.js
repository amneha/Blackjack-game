let firstcard , secondcard;
    firstcard= getRandom();
    secondcard= getRandom();
let sum = firstcard + secondcard;
let message="";
let hasBlackJack=false;
let isAlive=false;
let cards=[firstcard , secondcard];
let player={name:"Neha" , chips:130};
document.getElementById("player-el").textContent=player.name+": $"+player.chips;

function getRandom(){
    let random=Math.floor(Math.random()*13)+1;
    if(random===1)
       return 11;
    if(random===11 || random===12 || random===13)
       return 10;
    else
       return random;
}
 
function Game(){
    isAlive=true;
    let cardsEL=document.getElementById("cards-el");
    cardsEL.textContent= "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEL.textContent +=cards[i]+" ";

    }
    document.getElementById("sum-el").textContent="Sum: "+ sum;
if(sum<=20){
    message="Do you want to draw a new card?";
}
else if(sum===21){
    message="Blackjack!...You won!!";
    hasBlackJack=true;
}
else{
    message="You Loose!!...You're out of the game";
    isAlive=false;
} 
document.getElementById("message").innerHTML=message;

}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    console.log("new card is picked");
    let card=getRandom();
    sum=sum+card;
    cards.push(card);
    Game();
    }
}


