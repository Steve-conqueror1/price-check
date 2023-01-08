const priceCheck = (products = 7, productPrices, productSold, soldPrice) => {
  let error = 0;
  const actualPrices = {};
  const soldPrices = {};

  for (let i = 0; i < products.length; i++) {
    actualPrices[products[i]] = productPrices[i];
  }

  for (let i = 0; i < productSold.length; i++) {
    soldPrices[productSold[i]] = soldPrice[i];
  }

  for (let i = 0; i < productSold.length; i++) {
    if (actualPrices[productSold[i]] !== soldPrice[productSold[i]]) {
      error += 1;
    }
  }

  console.log(`Error: ${error}`);
};

priceCheck(
  ['rice', 'sugar', 'wheat', 'cheese'],
  [16.89, 56.92, 20.89, 345.99],
  ['rice', 'cheese'],
  [18.99, 400.89]
);
