import { productData } from './api.js';

export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
    
        return this.products[randomProductIndex];
    }

    generateOptions() {
        const option1 = this.getRandomProduct(productData);
        let option2 = this.getRandomProduct(productData);
        let option3 = this.getRandomProduct(productData);
        
        while (option1.id === option2.id) {
            option2 = this.getRandomProduct(productData);
        } while (option1.id === option3.id || option2.id === option3.id) {
            option3 = this.getRandomProduct(productData);
        }
        const optionArray = [option1, option2, option3];

        return optionArray;
    }
}