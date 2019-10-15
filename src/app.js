import { productData } from './api.js';
import { ProductArray } from './products-array.js';
const newProductArray = new ProductArray(productData);
// const productImageTags = document.querySelectorAll('img');
// const productRadioTags = document.querySelectorAll('input');
// const productName = document.getElementById('product-name');


const threeOptions = newProductArray.generateOptions();
console.log(threeOptions);

function displayOptions() {
    document.getElementById('option1');
    document.getElementById('option2');
    document.getElementById('option3');
}

displayOptions();
// let numberOfRounds = 0;
// let numberOfClicks = 0;
// let numberOfDisplays = 0;

// productRadioTags.forEach((radioTag) => {
//     radioTag.addEventListener('click', (event) => {
//         if (numberOfRounds < 25) { 
//             numberOfRounds = numberOfRounds++;
//         } else {
//             return results;
//         }
//     });
// });