// Object to hold the game state
const state = {
    day: 1,
    queenHealth: 100,
    food: 50,
    ants: 10,
    foodConsumptionRate: 2,
    starvationDays: 0
};

// Get references to the DOM elements in index.html
const dayDisplay = document.getElementById("day");
const queenHealthDisplay = document.getElementById("queen-health");
const foodDisplay = document.getElementById("food");
const antsDisplay = document.getElementById("ants");
const endDayButton = document.getElementById("end-day");
const foodConsumptionSettings = document.getElementById("food-consumption-settings");
const starvationWarning = document.getElementById("starvation-warning");
const starvationThreshold = 4;
const maxStarvationDeaths = 3;

// Function to update the display based on the current state
function updateDisplay() {
    dayDisplay.textContent = state.day;
    queenHealthDisplay.textContent = state.queenHealth;
    foodDisplay.textContent = state.food;
    antsDisplay.textContent = state.ants;
    if (state.starvationDays >= starvationThreshold) {
        starvationWarning.textContent = " (Warning: Ants are starving!)";
    } else {
        starvationWarning.textContent = "";
    }
}

// Event listener for the food consumption settings dropdown
foodConsumptionSettings.addEventListener("change", function () {
    state.foodConsumptionRate = parseInt(foodConsumptionSettings.value, 10);
});

// Event listener for the "End Day" button
endDayButton.addEventListener("click", function () {
    state.day++;
    state.food = state.food - (state.ants * state.foodConsumptionRate);
    if (state.food <= 0) {
        state.food = 0;
        state.queenHealth--;
        state.starvationDays++;
    } else {
        state.starvationDays = 0;
    }
    if (state.starvationDays >= starvationThreshold) {
        const deaths = Math.min(maxStarvationDeaths, state.starvationDays - starvationThreshold + 1);
        state.ants = Math.max(0, state.ants - deaths);
    }
// Update the display after processing the end of the day
    updateDisplay();
});

updateDisplay();