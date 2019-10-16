import { productData } from './api.js';
import { ProductArray } from './products-array.js';
import store from './store.js';
const newProductArray = new ProductArray(productData);
const radioInputs = document.querySelectorAll('input[name=product]');
const nextButton = document.getElementById('next-button');
nextButton.disabled = true;
let numberOfRounds = 0;
let threeOptions = [];

store.clearRoundData();




function displayOptions() {
    threeOptions = newProductArray.generateOptions();
    let image1 = document.getElementById('option1');
    let image2 = document.getElementById('option2');
    let image3 = document.getElementById('option3');
    let value1 = document.getElementById('option-1');
    let value2 = document.getElementById('option-2');
    let value3 = document.getElementById('option-3');
    image1.src = threeOptions[0].image;
    image2.src = threeOptions[1].image;
    image3.src = threeOptions[2].image;
    value1.value = threeOptions[0].id;
    value2.value = threeOptions[1].id;
    value3.value = threeOptions[2].id;
}


displayOptions();

    
for (let i = 0; i < radioInputs.length; i++) {
    let radioInput = radioInputs[i];
    radioInput.addEventListener('click', () => {
        nextButton.disabled = false;
        let id = radioInput.value;
        store.selectProduct(id);
    });
}

function finalResults(){
    nextButton.disabled = true;
    store.recordAllTimeData();
    // store.recordDisplays();
    return;
}

nextButton.addEventListener('click', () => {
    numberOfRounds++;
    if (numberOfRounds > 24) {
        finalResults();
    } else {
        displayOptions();
    }
});