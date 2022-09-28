var shopping, inputNumber, inputList;

/**
 * The Shopping List
 * @type {string[]}
 */
shopping = [
    "Potato",
    "Lemon",
    "Chicken",
    "Tea",
    "Chocolate",
    "Ice Cream",
    "Strawberry",
    "Salt",
    "Cheese",
    "Ketchup"
];

/**
 * Output field
 */
function main()
{
    updateItem();
    display();
}

/**
 * Here you input a value of the array number, and input field to update to new value;
 * @returns {*}
 */
function getInteger()
{
    inputNumber = document.getElementById('locate').value;
    return inputNumber;
}

//text field to update.
function getUpdateRemove()
{
    inputList = document.getElementById('update').value;
    return inputList;
}

/**
 * Display and update the shopping List;
 */
function display()
{
    document.getElementById("ListOfItems").innerHTML = shopping.join('<br>');
}
function updateItem()
{
    shopping[getInteger()] = '' + getUpdateRemove();
}