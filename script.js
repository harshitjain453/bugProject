fetch(' https://prices.azure.com/api/retail/prices')
.then((response) => response.json())
  .then((data) => console.log(data));