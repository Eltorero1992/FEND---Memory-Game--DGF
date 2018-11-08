/*
 * Create a list that holds all of your cards
 */

let cardList = document.querySelectorAll('.card');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle([...array]) {
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
 *   - loop through each card and create its HTML
 */

function createDeck () {

	let newDeck = shuffle(cardList)
	

	for (let card of newDeck) {
		let newCard = "<li class=\"card\">" + card.innerHTML + "</li>";
		document.querySelector(".deck").firstElementChild.remove()
/*
 *   - add each card's HTML to the page
 */
		document.querySelector(".deck").insertAdjacentHTML("beforeend",newCard);
	}

};

/*
 * set up the event listener for a card. If a card is clicked:
 */

/*
* - [Legacy] Event listener for card using a for of loop, needs to be re-executed on reset button, see reset button
*/

	// for (let card of cardList){
	// 	 card.addEventListener('click',function(event){
	// 	 	flipCard (event.target);
	// 	 	createCardList (event.target);
	// 	});
	// }

document.addEventListener('click',function(event){
	if (event.target.className === "card" ){
		flipCard (event.target);
		createCardList (event.target);}
});

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
			counterUp ();
/*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*/
	 		for (let card of openCardList){
	 			card.classList.remove("open","show");
	 			card.classList.add("match");
	 		}

	 		openCardList = [];
	 		allCardsMatched()	
 	}

/*
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*/

		else if (openCardList.length === 2 && openCardList[0].firstElementChild.classList.value !== openCardList[1].firstElementChild.classList.value) {	
			counterUp ();
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

 resetButton.addEventListener("click", function reset (){
	
	for (let card of cardList){
	 	card.classList.remove("open","show","match");
	 }

	document.querySelector(".moves").innerHTML = 0;

	let emptyStars = document.querySelectorAll(".fa-star-o");

	for (let emptyStar of emptyStars) {
		emptyStar.classList.remove("fa-star-o");
		emptyStar.classList.add("fa-star");
	}

	createDeck();

/*
* - [Legacy] cardList constant and for of loop needs to be re-defined after new DOM has been created 
*/

	// cardList = document.querySelectorAll('.card');

	// for (let card of cardList){
	// 	 card.addEventListener('click',function(event){
	// 	 	flipCard (event.target);
	// 	 	createCardList (event.target);
	// 	});
	// }

 });

