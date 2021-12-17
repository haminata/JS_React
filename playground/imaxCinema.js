const readlineSync = require("readline-sync");

let selectedItems = {
    movie: "",
    location: "",
    time: "",
    chosen_date: "",
    seat: "",
    total: ""
};

const movies = [
    "The Invisible Man",
    "Never Rarely Sometimes Always",
    "Gretel & Hansel",
    "No time to die",
    "Bloodshot",
    "Onward",
    "Sonic",
    "Spider - Man: No way home",
    "The Matrix Resurrection",
    "The King's Man"
];

const seatNumbers = {
    a:["A1", "A2","A3","A4","A5","A6","A7","A8","A9","A10"],
    b:["B1", "B2","B3","B4","B5","B6","B7","B8","B9","B10"],
    c:["C1", "C2","C3","C4","C5","C6","C7","C8","C9","C10"]
};

const locations = [
    "Brighton",
    "Bristol",
    "Leeds",
    "Liverpool",
    "Manchester",
    "Glasgow",
    "Sheffield"
];

const price = {
    standard:"£12",
    student:"£8",
    children: "£4",
    nhs: "4"
};

const times = {
    scren1: "13:00",
    scren2: "16:30",
    scren3: "19:00",
    scren4: "20:00"
}

function renderCinemaProperties(cinemaProperty) {
    cinemaProperty.forEach((elementProperty, index) =>{
        console.log(`${index +1}: ${elementProperty}`);
    });
    const choice = readlineSync.question("Select by number: ");
    renderUserChoice(choice, cinemaProperty);
}



function renderUserChoice(num, array) {
    const choiceAsNumber = parseInt(num);
    const chosenNumber = array[choiceAsNumber -1];

    if(chosenNumber !== undefined){
        console.log(`You selected ${chosenNumber}`);
    }else {
        console.log("We don't have a cinema in this location yet!")
        renderCinemaProperties(array);
    }
}



function totalTickets() {

}

function mainMenu() {
    console.log("Welcome to IMAX Cinema! ");
    renderCinemaProperties(locations);

    console.log("=====================");
    console.log(`Movies available by your chosen location!`);
    console.log("=====================");

    renderCinemaProperties(movies);
    const movieInput = readlineSync.question("Select movie by number: ");
    checkAraElementSameAsUserInput(movieInput, movies);
    mainMenu();

}

function checkAraElementSameAsUserInput(input, array){
    for (const inputElement of array) {
        if(input === inputElement){
            return inputElement;
        }
    }
}

mainMenu();