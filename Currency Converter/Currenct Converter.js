const currencyData = [
    { name: "New Zealand Dollar", symbol: "NZD", rate: 0.019133 },
    { name: "United States Dollar", symbol: "USD", rate: 0.012013 },
    { name: "Australian Dollar", symbol: "AUD", rate: 0.017727 },
    { name: "Canadian Dollar", symbol: "CAD", rate: 0.016017 },
    { name: "Indian Rupee", symbol: "INR", rate: 1.00 },
    { name: "Euro", symbol: "EUR", rate: 0.010928 },

];

function populateCurrencySelect() {
    const select = document.querySelectorAll("select");
    select.forEach((s) => {
        currencyData.forEach((c) => {
            const option = document.createElement("option");
            option.value = c.symbol;
            option.textContent = c.name;
            s.appendChild(option);
        });
    });
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const fromRate = currencyData.find((c) => c.symbol === fromCurrency).rate;
    const toRate = currencyData.find((c) => c.symbol === toCurrency).rate;

    const result = (amount * fromRate) / toRate;
    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toCurrency}`;
}

document.getElementById("converterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    convertCurrency();
});

populateCurrencySelect();