const state = {
    day: 1,
    queenHealth: 100,
    food: 50,
    ants: 10,
    foodConsumptionRate: 2,
    starvationDays: 0
};

const dayDisplay = document.getElementById("day");
const queenHealthDisplay = document.getElementById("queen-health");
const foodDisplay = document.getElementById("food");
const antsDisplay = document.getElementById("ants");
const endDayButton = document.getElementById("end-day");
const foodConsumptionSettings = document.getElementById("food-consumption-settings");
const starvationWarning = document.getElementById("starvation-warning");
const starvationThreshold = 3;


function updateDisplay() {
    dayDisplay.textContent = state.day;
    queenHealthDisplay.textContent = state.queenHealth;
    foodDisplay.textContent = state.food;
    antsDisplay.textContent = state.ants;
}

foodConsumptionSettings.addEventListener("change", function () {
    state.foodConsumptionRate = parseInt(foodConsumptionSettings.value, 10);
});

endDayButton.addEventListener("click", function () {
    state.day++;
    state.food = state.food - (state.ants * state.foodConsumptionRate);
    if (state.food <= 0) {
        state.food = 0;
        state.queenHealth--;
        state.starvationDays++;
        if (state.starvationDays >= starvationThreshold) {
            state.ants = Math.max(0, state.ants - (state.starvationDays - starvationThreshold + 1));
            starvationWarning.textContent = " (Warning: Ants are starving!)";
            }
        } else {
            state.starvationDays = 0;
        }


        updateDisplay();
    });

updateDisplay();