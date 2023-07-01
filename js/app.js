const endDate = new Date("2023-07-01T11:22:00").getTime();
const mainContainer = document.getElementById("main-container");
const clockTime = document.getElementById("clock-time");
const endTimeSound = document.getElementById("end-time-sound");

function updateBackground() {
    const now = new Date().getTime();

    if (endDate <= now) {
        mainContainer.style.backgroundImage = "url('bg1.png')";
        // Play the sound when the end time is reached
        endTimeSound.play();
    } else {
        mainContainer.style.backgroundImage = "url('bg2.png')";
    }
}

function updateCountdown() {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    updateInputValue(0, days);
    updateInputValue(1, hours);
    updateInputValue(2, minutes);
    updateInputValue(3, seconds);

    // Update the clock time display
    clockTime.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateInputValue(index, value) {
    const inputs = document.querySelectorAll("input");
    inputs[index].value = formatTime(value);
}

function playAudio() {
    const audio = new Audio("music.mp3");
    audio.play();
}

updateCountdown();
updateBackground();

// Update countdown and clock time every second
setInterval(updateCountdown, 1000);
setInterval(updateBackground, 1000);

// Add event listeners to redirect to Facebook and Twitter login pages
const facebookButton = document.getElementById("facebook-button");
const twitterButton = document.getElementById("twitter-button");

facebookButton.addEventListener("click", function () {
    window.location.href = "https://www.facebook.com/login.php"; // Replace with the actual Facebook login URL
});

twitterButton.addEventListener("click", function () {
    window.location.href = "https://twitter.com/login"; // Replace with the actual Twitter login URL
});
