let day = 1;

const dayCounter = document.getElementById("day");
const endDayButton = document.getElementById("end-day");

endDayButton.addEventListener("click", 
    function () 
    {
        day++;
        dayCounter.textContent = day;
    }
);