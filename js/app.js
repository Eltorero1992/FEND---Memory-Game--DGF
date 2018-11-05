/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 */

const cardList = document.getElementsByClassName('card');

for (let card of cardList){

	 card.addEventListener('click',function(event){
	 	counterUp ();
	 	flipCard (event.target);
	 	createCardList (event.target);
	});
}

 /*
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 */

 function flipCard (card) {

 	card.classList.add("open","show");
 }

 /*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 */

 function createCardList (card) {

 	let openCardList = document.querySelectorAll(".open",".show");
 
 /*
 *  - if the list already has another card, check to see if the two cards match
 */
		if (openCardList.length === 2 && openCardList[0].firstElementChild.classList.value === openCardList[1].firstElementChild.classList.value){

/*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*/
	 		for (let card of openCardList){
	 			card.classList.remove("open","show");
	 			card.classList.add("match");
	 		}

	 		openCardList = [];	
 	}

/*
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*/

		else if (openCardList.length === 2 && openCardList[0].firstElementChild.classList.value !== openCardList[1].firstElementChild.classList.value) {	

	 		setTimeout(function () { 
	 			for (let card of openCardList){
	 			card.classList.remove("open","show");
	 			}	
				openCardList = [];}, 750);

	 		document.querySelector(".fa-star").classList.add("fa-star-o")
			document.querySelector(".fa-star").classList.remove("fa-star")

			if (document.querySelector(".stars").childElementCount === document.querySelectorAll(".fa-star-o").length) {
				console.log("You Lost \! ")
			}

	}

	allCardsMatched()
}
 /*
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 */

function counterUp () {
	document.querySelector(".moves").innerHTML = Number(document.querySelector(".moves").innerHTML) + 1   
}

 /*
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

function allCardsMatched (){

	let cardsMatched = document.querySelectorAll(".match")

	if (cardList.length === cardsMatched.length) {
		console.log("Yes \! You've won \!")
	}

}

function win () {

	for (let card of cardList){
	 	card.classList.remove("open","show");
	 	card.classList.add("match");
	 };

	allCardsMatched();
}

 /*
 * 	 + reset button flips all cards down	
 */

 const resetButton = document.querySelector(".restart");

 resetButton.addEventListener("click", function(){
	for (let card of cardList){
	 	card.classList.remove("open","show","match");
	 }

	 document.querySelector(".moves").innerHTML = 0;

 })


