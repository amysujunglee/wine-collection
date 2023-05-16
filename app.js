import wineList from './data.js';

const result = document.querySelector('#show-result');
const btnAll = document.querySelector('.btn.all')
const btnRed = document.querySelector('.btn.red');
const btnWhite = document.querySelector('.btn.white');
const btnChardonnay = document.querySelector('.btn.chardonnay');
const btnShiraz = document.querySelector('.btn.shiraz');
const btnRiesling = document.querySelector('.btn.riesling');
const btnNebbiolo = document.querySelector('.btn.nebbiolo');

const showWineList = (wine) => {
    const wineItem = document.createElement('ul');
    wineItem.className = 'wine-item';
    wineItem.innerHTML = `
    ${wine.image ? `<li><img src="${wine.image}" class="wine-img" /></li>` : ''}
    <li>${wine.name}</li>
    <li>${wine.grape[0].toUpperCase() + wine.grape.slice(1)}</li>
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

btnChardonnay.addEventListener('click', () => {
    resetList();

    const chardonnayWine = wineList.filter(wine => {
        return wine.grape === 'chardonnay';
    });

    chardonnayWine.forEach(wine => {
        showWineList(wine);
    });
});

btnShiraz.addEventListener('click', () => {
    resetList();

    const shirazWine = wineList.filter(wine => {
        return wine.grape === 'shiraz';
    });

    shirazWine.forEach(wine => {
        showWineList(wine);
    });
});

btnRiesling.addEventListener('click', () => {
    resetList();

    const rieslingWine = wineList.filter(wine => {
        return wine.grape === 'riesling';
    });

    rieslingWine.forEach(wine => {
        showWineList(wine);
    });
});

btnNebbiolo.addEventListener('click', () => {
    resetList();

    const nebbioloWine = wineList.filter(wine => {
        return wine.grape === 'nebbiolo';
    });

    nebbioloWine.forEach(wine => {
        showWineList(wine);
    });
});