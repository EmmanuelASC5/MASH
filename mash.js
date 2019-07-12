function randomNumber(num) {
    const number = Math.random();
    const times21 = number * num;
    const final = Math.floor(times21);
    return final;
}





function mash() {
    let mash1 = "House";
    return mash1;
}
if (process.argv[2] && process.argv[3] && process.argv[4]) {
    console.log("You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids!");
console.log("You will also drive a " + getCar() + "!");
} else {
    console.log("User input missing!");
}

function getHome() {
    let options = ["Mansion", "Apartment", "Shack", "House", process.argv[2]];
    let randomOption = randomNumber(options.length);
    let result = options[randomOption];
    return result;
}
// console.log(getHome());


function getChildrenCount() {
    let children = randomNumber(100);
    let userchoice = process.argv[3];
    if (children > 50) {
        return children;
    } else {
        return process.argv[3];
    }
}
// console.log(getChildrenCount());

function getCar() {
    let cars = ["Ferrari", "Mercedes", "Audi", "Porsche", "Corvette", process.argv[4]];
    let randomcar = randomNumber(cars.length);
    let newcar = cars[randomcar];
    return newcar;
}
// console.log(getCar());