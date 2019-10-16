export function findProduct(array, id) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.id === id) {
            return element;
        }
    }
    return null;
}