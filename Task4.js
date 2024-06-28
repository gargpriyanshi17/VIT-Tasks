function showDate() {
    const currentDate = new Date();
    const dateOutput = currentDate.toDateString();
    document.getElementById("output1").innerHTML = "Date: " + dateOutput;
}

function showTime() {
    const currentTime = new Date();
    const timeOutput = currentTime.toLocaleTimeString();
    document.getElementById("output2").innerHTML = "Time: " + timeOutput;
}

document.getElementById("showDateButton").addEventListener("click", showDate);
document.getElementById("showTimeButton").addEventListener("click", showTime);