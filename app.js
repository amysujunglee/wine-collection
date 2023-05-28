import wineList from './data.js';

const result = document.querySelector('#show-result');
const btnAll = document.querySelector('.btn.all')
const btnRed = document.querySelector('.btn.red');
const btnWhite = document.querySelector('.btn.white');

const btnCabernetSauvignon = document.querySelector('.btn.cabernet-sauvignon');
const btnChardonnay = document.querySelector('.btn.chardonnay');
const btnShiraz = document.querySelector('.btn.shiraz');
const btnRiesling = document.querySelector('.btn.riesling');
const btnNebbiolo = document.querySelector('.btn.nebbiolo');

const btnUnder20 = document.querySelector('.btn.under20');
const btnUnder30 = document.querySelector('.btn.under30');
const btnUnder40 = document.querySelector('.btn.under40');

const btnGood = document.querySelector('.btn.good');
const btnBad = document.querySelector('.btn.bad');

const showWineList = (wine) => {
    const wineItem = document.createElement('ul');
    wineItem.className = 'wine-item';
    wineItem.innerHTML = `
    ${wine.image ? `<li><img src="${wine.image}" class="wine-img" /></li>` : ''}
    <li class="wine-name">${wine.name}</li>
    <li>${wine.grape}</li>
    <li>${wine.type[0].toUpperCase() + wine.type.slice(1)}</li>
    ${wine.vintage !== '' ? `<li>${wine.vintage}</li>` : ''}
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

btnCabernetSauvignon.addEventListener('click', () => {
    resetList();

    const cabernetSauvignonWine = wineList.filter(wine => {
        return wine.grape === 'Cabernet Sauvignon';
    });

    cabernetSauvignonWine.forEach(wine => {
        showWineList(wine);
    });
});

btnChardonnay.addEventListener('click', () => {
    resetList();

    const chardonnayWine = wineList.filter(wine => {
        return wine.grape === 'Chardonnay';
    });

    chardonnayWine.forEach(wine => {
        showWineList(wine);
    });
});

btnShiraz.addEventListener('click', () => {
    resetList();

    const shirazWine = wineList.filter(wine => {
        return wine.grape === 'Shiraz';
    });

    shirazWine.forEach(wine => {
        showWineList(wine);
    });
});

btnRiesling.addEventListener('click', () => {
    resetList();

    const rieslingWine = wineList.filter(wine => {
        return wine.grape === 'Riesling';
    });

    rieslingWine.forEach(wine => {
        showWineList(wine);
    });
});

btnNebbiolo.addEventListener('click', () => {
    resetList();

    const nebbioloWine = wineList.filter(wine => {
        return wine.grape === 'Nebbiolo';
    });

    nebbioloWine.forEach(wine => {
        showWineList(wine);
    });
});

btnUnder20.addEventListener('click', () => {
    resetList();

    const under20Wine = wineList.filter(wine => {
        return wine.price <= 20;
    });

    under20Wine.forEach(wine => {
        showWineList(wine);
    });
});

btnUnder30.addEventListener('click', () => {
    resetList();

    const under30Wine = wineList.filter(wine => {
        return wine.price <= 30;
    });

    under30Wine.forEach(wine => {
        showWineList(wine);
    });
});

btnUnder40.addEventListener('click', () => {
    resetList();

    const under40Wine = wineList.filter(wine => {
        return wine.price <= 40;
    });

    under40Wine.forEach(wine => {
        showWineList(wine);
    });
});

btnGood.addEventListener('click', () => {
    resetList();

    const goodWine = wineList.filter(wine => {
        return wine.recommend === true;
    });

    goodWine.forEach(wine => {
        showWineList(wine);
    });
});

btnBad.addEventListener('click', () => {
    resetList();

    const badWine = wineList.filter(wine => {
        return wine.recommend === false;
    });

    badWine.forEach(wine => {
        showWineList(wine);
    });
});