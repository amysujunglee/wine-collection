const wine = [
    {
        id: 1,
        name: 'Kendall Jackson',
        category: 'Chardonnay',
        color: 'white',
        vintage: '2020',
        price: 21.99,
        winery: 'Fulton, California, US'
    },
    {
        id: 2,
        name: 'Hardys',
        category: 'Shiraz',
        color: 'red',
        vintage: '2020',
        price: 10.99,
        winery: 'Australia'
    }
]

console.log(wine);

const wineList = document.querySelector('#wine-list');

wine.forEach(item => {
    const wineItem = document.createElement('ul');
    wineItem.innerHTML = `
    <li>${item.name}</li>
    <li>${item.category}</li>
    <li>${item.color[0].toUpperCase() + item.color.slice(1)}</li>
    <li>${item.vintage}</li>
    <li>$${item.price}</li>
    <li>${item.winery}</li>
    `

    wineList.append(wineItem);
});