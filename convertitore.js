const currencyElOne = document.getElementById('currencyOne');
const currencyElTwo = document.getElementById('currencyTwo');
const amountElOne = document.getElementById('amountOne');
const amountElTwo = document.getElementById('amountTwo');

const rateEl = document.getElementById('rate');

// Fetch exchange rates and update the dome
function calculate() {
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;

  fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo];
      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyElOne.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElTwo.addEventListener('input', calculate);


calculate();