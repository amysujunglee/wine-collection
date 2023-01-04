import wineList from './components/data.js';

const result = document.querySelector('#show-result');

wineList.forEach(item => {
    const wineItem = document.createElement('ul');
    wineItem.innerHTML = `
    <li>${item.name}</li>
    <li>${item.category}</li>
    <li>${item.color[0].toUpperCase() + item.color.slice(1)}</li>
    <li>${item.vintage}</li>
    <li>$${item.price}</li>
    <li>${item.winery}</li>
    `

    result.append(wineItem);
});