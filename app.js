const express = require("express");
const getPriceData = require("./src/get-price-data");
const sendEmails = require("./src/send-emails");
const { targetPrice } = require("./src/app-data");

const app = express();

const priceNotify = async () => {
  const currentPrice = await getPriceData();

  if (currentPrice <= targetPrice) {
    sendEmails(currentPrice.toFixed(3));
  } else {
    console.log(`Current price: ${currentPrice} BGN per USD.`);
  }
};

priceNotify();

setInterval(() => {
  priceNotify();
}, 1800000);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
