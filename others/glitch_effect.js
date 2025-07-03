
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".dynamic-text h2");

    function applyGlitchEffect() {
        elements.forEach((element) => {
            const chars = element.textContent.split("").map(char => char === " " ? " " : char);
            element.textContent = "";

            chars.forEach((char, i) => {
                let span = document.createElement("span");
                span.textContent = char;
                span.style.display = "inline-block";
                span.style.transform = `translate(${Math.random() * 15 - 6}px, ${Math.random() * 10 - 5}px) rotate(${Math.random() * 6 - 3}deg)`;
                span.style.opacity = "0";
                span.style.transition = `transform 0.5s ease ${i * 0.05}s, opacity 0.5s ease ${i * 0.05}s`;
                span.style.marginRight = "2px"; // Espacio entre caracteres
                element.appendChild(span);
            });

            setTimeout(() => {
                element.querySelectorAll("span").forEach((span) => {
                    span.style.opacity = "1";
                    span.style.transform = "translate(0, 0) rotate(0deg)";
                });
            }, 100);
        });
    }

    applyGlitchEffect();
    setInterval(applyGlitchEffect, 6000);
});

