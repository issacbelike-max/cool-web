const audio = new Audio('/static/firework.mp3');
audio.loop = true
document.addEventListener('click', () => {
    audio.play();
});
function celebrate() {
    const container = document.getElementById('fireworks-container');
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * (window.innerHeight * 0.6);

            createFirework(randomX, randomY);
        }, i * 300); 
    }
}

function createFirework(x, y) {
    const container = document.getElementById('fireworks-container');
    const particleCount = 25; 
    const colors = ['#ff4757', '#eccc68', '#7bed9f', '#70a1ff', '#ffa502', '#ff6b81', '#10ac84'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = randomColor;
        particle.style.boxShadow = `0 0 10px ${randomColor}`;

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 150 + 100;
        
        const moveX = Math.cos(angle) * distance + 'px';
        const moveY = Math.sin(angle) * distance + 'px';

        // Truyền biến vào CSS keyframes
        particle.style.setProperty('--x', moveX);
        particle.style.setProperty('--y', moveY);

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
}

function updateClock() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    document.getElementById('countdown').textContent = timeString;
}
setInterval(function() {
    const xNgauNhien = Math.random() * window.innerWidth;
    
    const yNgauNhien = Math.random() * window.innerHeight;

    const suKienGia = {
        clientX: xNgauNhien,
        clientY: yNgauNhien
    };

    celebrate(suKienGia); 

}, 1000);
