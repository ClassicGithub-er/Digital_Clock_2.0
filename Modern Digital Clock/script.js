function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;

    let day = now.getDate();
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();
    let dateString = `${month} ${day}, ${year}`;

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

setInterval(updateTime, 1000);

updateTime();
