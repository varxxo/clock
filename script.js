function updateTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period = hour >= 12 ? 'PM' : 'AM';

    // Convert hour to 12-hour format
    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
    }

    // Add leading zeros if needed
    hour = update(hour);
    minute = update(minute);
    second = update(second);

    // Display time in the div
    document.getElementById('digital-clock').innerText =
        `${hour}:${minute}:${second} ${period}`;

    // Update every second
    setTimeout(updateTime, 1000);
}

function update(t) {
    return t < 10 ? '0' + t : t;
}

updateTime(); // Initial call to start the clock
