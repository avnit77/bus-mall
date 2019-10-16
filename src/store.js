import { findProduct } from './register.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getRoundHistory() {
        let history = store.get('round-history');

        if (!history) {
            history = [];
        }
        return history;
    },
    getAllTimeHistory() {
        let history = store.get('all-time-history');

        if (!history) {
            history = [];
        }
        return history;
    },
  
    selectProduct(id) {
        const roundHistory = store.getRoundHistory();
        const product = findProduct(roundHistory, id);

        if (product) {
            product.quantity += 1;
        } else {
            const order = {
                id: id,
                quantity: 1,
            };
            roundHistory.push(order);
        }
        store.save('round-history', roundHistory);
    },
    getId(product) {
        let id = product.id;
        return id;
    },
    recordAllTimeData() {
        const roundHistory = store.getRoundHistory();
        let allTimeHistory = store.getAllTimeHistory();
        let names = allTimeHistory.map(this.getId);
        if (allTimeHistory.length === 0) {
            allTimeHistory = roundHistory;
            store.save('all-time-history', allTimeHistory);
        } else {
            let i = 0;
            while (i < roundHistory.length) {
                if (!names.includes(roundHistory[i].id)) {
                    allTimeHistory.push(roundHistory[i]);
                    store.save('all-time-history', allTimeHistory);
                } else {
                    let write = findProduct(allTimeHistory, roundHistory[i].id);
                    write.quantity += roundHistory[i].quantity;
                    store.save('all-time-history', allTimeHistory);
                }
                i++;
            }
        }
    },

    clearRoundData() {
        store.storage.removeItem('round-history');
    },
};

export default store;