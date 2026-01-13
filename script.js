const container = document.getElementById("tilgul-container");
const items = ["⚫", "🟤", "🍬"]; // Til, Gul, Sweet

function createTilgul() {
    const span = document.createElement("span");
    span.classList.add("tilgul");
    span.innerText = items[Math.floor(Math.random() * items.length)];

    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.animationDuration = (2 + Math.random() * 3) + "s";

    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);
}

setInterval(createTilgul, 200);
