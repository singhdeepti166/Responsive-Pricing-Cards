
const monthlyBtn = document.getElementById("monthly-btn");
const yearlyBtn = document.getElementById("yearly-btn");

const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");
const notes = document.querySelectorAll(".billing-note");

function updatePricing(isYearly) {

    prices.forEach(price => {
        const monthlyPrice = price.dataset.monthly;
        const yearlyPrice = price.dataset.yearly;

        price.textContent = isYearly ? yearlyPrice : monthlyPrice;
    });

    periods.forEach(period => {
        period.textContent = isYearly ? "/month" : "/month";
    });

    notes.forEach(note => {
        if (isYearly) {
            const price = note.previousElementSibling
                .querySelector(".amount");

            const yearlyTotal = Number(price.dataset.yearly) * 12;

            note.textContent = `Billed yearly: ₹${yearlyTotal} per year`;
        } else {
            note.textContent = "Billed monthly";
        }
    });

    monthlyBtn.classList.toggle("active", !isYearly);
    yearlyBtn.classList.toggle("active", isYearly);

    monthlyBtn.setAttribute("aria-pressed", String(!isYearly));
    yearlyBtn.setAttribute("aria-pressed", String(isYearly));
}

monthlyBtn.addEventListener("click", () => {
    updatePricing(false);
});

yearlyBtn.addEventListener("click", () => {
    updatePricing(true);
});

updatePricing(false);
