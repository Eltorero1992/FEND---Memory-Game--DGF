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
 
Event listener to get card and card classes

 */
 document.addEventListener ('click',function(event){
 	let selectedCard = event.target;
 	flipCard (selectedCard);
 	createCardList (selectedCard);
})


 /*
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 */

 function flipCard (selectedCard) {

 	selectedCard.classList.add("open","show");
 }

 /*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 */

 function createCardList (selectedCard) {

 	let cardList = document.querySelectorAll(".open",".show")
 	if (cardList.length === 2 && cardList[0].firstElementChild.classList.value === cardList[1].firstElementChild.classList.value){
 		console.log(true);
 	} else {
 		console.log(false);
 	}
 		



 	 /*
	}
 *  - if the list already has another card, check to see if the two cards match
 */

 }



 /*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */