
const wrapper = document.querySelector('.wrapper');

//api request

const getCoins = async () => {

    const apiRequest = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    const apiResponse = await fetch (apiRequest);
    const data = await apiResponse.json();

    return data;
}


getCoins()
 .then(data => { 
    data.forEach(function (items) {
        const {image, name, symbol, current_price} = items
        wrapper.insertAdjacentHTML('beforeend', `<div class="coin-wrapper"> <div class="coin-info"> <img class="coin-image" src=${image} alt=""> <p class="coin-name">${name}</p><p class="coin-symbol">"${symbol}"</p></div><p class="current-price">Price: ${current_price}</p></div>`)
     });    
 })
 .catch(err => console.log(err));
