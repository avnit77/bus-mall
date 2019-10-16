import Listings from './listings.js';
import products from './products.js';
import store from './store.js';

const imageLeft = document.getElementById('option1');
const imageCenter = document.getElementById('option2');
const imageRight = document.getElementById('option3');
const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

let oldItems = [];
let newItems = [];
let turns = 0;
const turnTotal = 25;

store.clearRoundData();

renderItems();

leftButton.addEventListener('click', handleUserChoice); 

centerButton.addEventListener('click', handleUserChoice);

rightButton.addEventListener('click', handleUserChoice);

function handleUserChoice(event) {
    let id = event.currentTarget.value;
    store.selectProduct(id);
    renderItems();
    turns++;
    buttonDisableCheck(turns, turnTotal);
}

function chooseNewItems(oldItems) {
    const masterList = new Listings(products);
    masterList.removeItems(oldItems);
    newItems = masterList.getNRandomItems(3);
    newItems.forEach(item => {
        store.displayProduct(item.id);
    });
    return newItems;
}

function displayChosenItems(chosenItems) {
    imageLeft.src = chosenItems[0].image;
    leftButton.value = chosenItems[0].id;
    imageCenter.src = chosenItems[1].image;
    centerButton.value = chosenItems[1].id;
    imageRight.src = chosenItems[2].image;
    rightButton.value = chosenItems[2].id;
}

function renderItems() {
    newItems = chooseNewItems(oldItems);
    displayChosenItems(newItems);
    oldItems = newItems;
}

function buttonDisableCheck(turns, turnTotal) {
    if (turns === turnTotal) {
        leftButton.disabled = true;
        centerButton.disabled = true;
        rightButton.disabled = true;
        store.recordAllTimeData();
        store.recordDisplays();
        return;
    }
}
