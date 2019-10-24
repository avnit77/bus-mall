import store from './store.js';

const ctx = document.getElementById('round-results').getContext('2d');

const data = [];
const productLabels = [];
const roundHistory = store.getRoundHistory();

for (let i = 0; i < roundHistory.length; i++) {
    const selected = roundHistory[i];
    const quant = selected.quantity;
    data.push(quant);
}

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productLabels,
        datasets: [{
            label: 'Round Results',
            data: data,
            backgroundColor: '#EBCCD1'
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

const allTimeCtx = document.getElementById('all-time-results').getContext('2d');

const allTimeProductLabels = [];
const allTimeData = [];
const allTimeHistory = store.getAllTimeHistory();

for (let j = 0; j < allTimeHistory.length; j++) {
    const selected = allTimeHistory[j];
    const quant = selected.quantity;
    allTimeData.push(quant);
}

new Chart(allTimeCtx, {
    type: 'bar',
    data: {
        labels: allTimeProductLabels,
        datasets: [
            {
                label: 'All Time Results',
                data: allTimeData,
                backgroundColor: '#EBCCD1'
            },

        ]
    },
    options: {
        scales: {
            yAxes: [{ 
                ticks: { 
                    beginAtZero: true } }]
        }
    }
});