function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    // Random position and size
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.animationDuration = (Math.random() * 2 + 1) + "s"; 

    document.body.appendChild(firework); 

    // Explosion effect
    setTimeout(() => {
      firework.style.width = "15px";
      firework.style.height = "15px";
      firework.style.animation = "burst 0.5s ease-out forwards";
    }, 1500);

    // Remove firework
    setTimeout(() => {
      firework.remove();
    }, 2000);
}

// Create fireworks every 300ms
setInterval(createFirework, 300);


