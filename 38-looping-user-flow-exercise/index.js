// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require("readline-sync");

let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];

const books = [
	"My Dark Vanessa",
	"Uncanny Valley",
	"Weather",
	"The night watchman",
	"All adults here",
	"Dear Edward",
	"Grown ups"
];

const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

function renderListOfBooks(){
	console.log("Here are the books");
	books.forEach((books, index) => {
		console.log(`${index + 1}: ${books}`);
	});

	const choice = readlineSync.question("Make your choice");
	const choiceAsNumber = parseInt(choice);
	const chosenBook = books[choiceAsNumber - 1];
	selectedItems.book = chosenBook;

	if (chosenBook !== undefined) {
		console.log(`You chose ${chosenBook}!`);
	} else {
		console.log("That is not a valid choice");
		renderListOfBooks();
	}
}


/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
function renderListOfMovies(){
	console.log("Here are the books");
	movies.forEach((movies, index) => {
		console.log(`${index + 1}: ${movies}`);
	});

	const choice = readlineSync.question("Make your choice");
	const choiceAsNumber = parseInt(choice);
	const chosenMovies = movies[choiceAsNumber - 1];
	selectedItems.movie = chosenMovies;

	if (chosenMovies !== undefined) {
		console.log(`You chose ${chosenMovies}!`);
	} else {
		console.log("That is not a valid choice");
		renderListOfMovies();
	}
}

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

function renderListOfNextDestination(){
	console.log("Here are the books");
	countries.forEach((countries, index) => {
		console.log(`${index + 1}: ${countries}`);
	});

	const choice = readlineSync.question("Make your choice");
	const choiceAsNumber = parseInt(choice);
	const chosenCountries = countries[choiceAsNumber - 1];
	selectedItems.nextTrip = chosenCountries;

	if (chosenCountries !== undefined) {
		console.log(`You chose ${chosenCountries}!`);
	} else {
		console.log("That is not a valid choice");
		renderListOfNextDestination();
	}
}

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

function mainMenu() {
	const input = readlineSync.question("Select Books, Movies, or Next destination: ");
	if (input === "Books") {
		renderListOfBooks();

	} else if(input === "Movies"){
		renderListOfMovies();

	} else if(input === "Next destination"){
		renderListOfNextDestination();

	} else {
		console.log("Oops, item not found select from options!");
		mainMenu();
	}


}

mainMenu();