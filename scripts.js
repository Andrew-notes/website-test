// for main menu
function toggleMenu() {
var menu = document.getElementById('nav-menu');
if (menu.classList.contains('hidden')) {
menu.classList.remove('hidden');
menu.classList.add('visible');
} else {
menu.classList.remove('visible');
menu.classList.add('hidden');
}
}

//images
const images = ["Pictures/1.jpg", "Pictures/2.jpg", "Pictures/3.jpg"];
let currentIndex = 0;

// left-button
function leftButton() {
currentIndex = (currentIndex + 1) % images.length;
document.getElementById("gallery").src = images[currentIndex];
}


//right-button
function rightButton() {
currentIndex = (currentIndex + 1) % images.length;
document.getElementById("gallery").src = images[currentIndex];
}


// open/close chat-bot
function displayChat() {
document.getElementById("chat-container").classList.toggle("show");
}


// chat-bot
async function sendMessage() {
let userInput = document.getElementById("userInput").value;
if (!userInput) return;

let chatBox = document.getElementById("chat");
chatBox.innerHTML += `<p><strong>Ти:</strong> ${userInput}</p>`;

let response = await fetch("http://127.0.0.1:8000/chat", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ message: userInput })
});
let data = await response.json();
chatBox.innerHTML += `<p><strong>Бот:</strong> ${data.response}</p>`;

document.getElementById("userInput").value = "";
chatBox.scrollTop = chatBox.scrollHeight;
}

// footer button
function displayResult() {
document.getElementById("В кінці").innerHTML = "Гарного дня!";
}
