var colors = [
	'red',
	'yellow',
	'orange',
	'blue',
	'green',
	'violet',
	'black',
	'pink'
];

var cards = [...document.querySelectorAll('.card')];

for(let color of colors) {
	var cardAIndex = parseInt(Math.random() * cards.length); //taking random card div
	var cardA = cards[cardAIndex]; //saving it
	cards.splice(cardAIndex, 1);//removing from array
	cardA.className +=  ${color};//adding class of colot
	cardA.setAttribute('data-color', color);// setting attribute of color


	var cardBIndex = parseInt(Math.random() * cards.length);
	var cardB = cards[cardBIndex];
	cards.splice(cardBIndex, 1);
	cardB.className +=  ${color};
	cardB.setAttribute('data-color', color);
}


let clickedCard = null;
let preventClick = false;// variable which helps to prevent opening cards before setTimeout ends
let combos = 0;

function onCardClicked(e){
	var target = e.currentTarget;
	if(preventClick || target === clickedCard || target.className.includes('done')){
		return;
	}
	target.className = target.className.replace('hidden', '').trim();//open card
	target.className += ' done';//if matches keeping cards open cards 

	if(!clickedCard){
		clickedCard = target;
	} else if(clickedCard){
		if(clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')){//if not a macth
			preventClick = true;
			
			setTimeout(() => {
				clickedCard.className = clickedCard.className.replace('done', '').trim()+ ' hidden';//delete done class
				target.className = target.className.replace('done', '').trim() + ' hidden';//delete done class
				clickedCard = null;
				preventClick = false;
			}, 500);
		}else{
			combos++;
			clickedCard = null;
			if(combos == 8){
				alert("Winner winner, chicken dinner!");
				location.reload();
			}
		}
	}
}


function startTimer(time){
		
	
		console.log(document.getElementById('timeInput').value);


	document.getElementById("unclickable").style.pointerEvents = "auto";
	var seconds = time, $seconds = document.querySelector('#countdown');
	(function countdown() {
    	$seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's');
    	
    	if(seconds --> 0){
		   	setTimeout(countdown, 1000)
		 } 

		 if(seconds == 0){ //its stopping at 1-2 seconds in chrome but working perfectly in mozilla 
		 	alert("You lose!");
		   	location.reload();
		 }
		
		    		
		    	
	})();

}