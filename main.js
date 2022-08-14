function createStar() {
    const heart = document.createElement("div");
    star.classList.add("star");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "⭐";
    

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

setInterval(createStar, 300);