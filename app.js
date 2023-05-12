import wineList from './data.js';

const result = document.querySelector('#show-result');
const btnAll = document.querySelector('.btn.all')
const btnRed = document.querySelector('.btn.red');
const btnWhite = document.querySelector('.btn.white');

const showWineList = (wine) => {
    const wineItem = document.createElement('ul');
    wineItem.innerHTML = `
    <li>${wine.name}</li>
    <li>${wine.grape}</li>
    <li>${wine.type[0].toUpperCase() + wine.type.slice(1)}</li>
    <li>${wine.vintage}</li>
    <li>$${wine.price}</li>
    <li>${wine.country}</li>
    <li>${wine.recommend === true ? 'Good' : 'Bad'}</li>
    `;

    result.append(wineItem);
};

const resetList = () => {
    result.innerHTML = '';
};

wineList.forEach(wine => {
    showWineList(wine);
});

btnAll.addEventListener('click', () => {
    resetList();

    wineList.forEach(wine => {
        showWineList(wine);
    });
});

btnRed.addEventListener('click', () => {
    resetList();

    const redWine = wineList.filter(wine => {
        return wine.type === 'red';
    });

    redWine.forEach(wine => {
        showWineList(wine);
    });
});

btnWhite.addEventListener('click', () => {
    resetList();

    const whiteWine = wineList.filter(wine => {
        return wine.type === 'white';
    });

    whiteWine.forEach(wine => {
        showWineList(wine);
    });
});