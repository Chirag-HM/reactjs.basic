document.getElementById("btn").addEventListener("click", getRate);

async function getRate() {
    const status = document.getElementById("status");
    status.innerText = "Loading...";

    try {
        const res = await fetch("https://api.exchangerate-api.com/v4/latest/GBP");

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }

        const data = await res.json();
        const rate = data.rates.INR;

        status.innerText = `1 GBP = ${rate.toFixed(2)} INR`;

    } catch (error) {
        status.innerText = "Error fetching data";
        console.log(error);
    }
}