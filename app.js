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
        console.log(items);
     });
 })
 .catch(err => console.log(err));


 // for every-each items 
