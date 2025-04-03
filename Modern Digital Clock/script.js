function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();

    // Format the time as HH:MM:SS
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;

    // Format the date as Month Day, Year
    let day = now.getDate();
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();
    let dateString = `${month} ${day}, ${year}`;

    // Update the elements
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initialize the clock immediately
updateTime();
