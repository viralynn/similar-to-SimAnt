const state = {
    day: 1,
    queenHealth: 100,
    food: 50,
    ants: 10
};

const dayDisplay = document.getElementById("day");
const queenHealthDisplay = document.getElementById("queen-health");
const foodDisplay = document.getElementById("food");
const antsDisplay = document.getElementById("ants");
const endDayButton = document.getElementById("end-day");

function updateDisplay() {
    dayDisplay.textContent = state.day;
    queenHealthDisplay.textContent = state.queenHealth;
    foodDisplay.textContent = state.food;
    antsDisplay.textContent = state.ants;
}

endDayButton.addEventListener("click", 
    function () 
    {
        state.day++;
        state.food = state.food - state.ants;
        updateDisplay();
    }
);

updateDisplay();