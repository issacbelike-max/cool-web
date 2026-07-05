// Hàm tạo hiệu ứng pháo hoa
function celebrate() {
    const container = document.getElementById('fireworks-container');
    
    // Tạo ra 5 quả pháo hoa nổ ở các vị trí ngẫu nhiên
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * (window.innerHeight * 0.6); // Tập trung nổ ở nửa trên màn hình
            createFirework(randomX, randomY);
        }, i * 300); // Nổ lệch giờ nhau một chút cho đẹp
    }
}

function createFirework(x, y) {
    const container = document.getElementById('fireworks-container');
    const particleCount = 60; // Số lượng tia pháo hoa rơi ra
    const colors = ['#ff4757', '#eccc68', '#7bed9f', '#70a1ff', '#ffa502', '#ff6b81', '#10ac84'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        
        // Đặt vị trí xuất phát từ điểm nổ tâm dịch chuyển
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = randomColor;
        particle.style.boxShadow = `0 0 10px ${randomColor}`;

        // Tính toán góc bắn ngẫu nhiên 360 độ và khoảng cách bay xa tầm 100px - 250px
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 150 + 100;
        
        const moveX = Math.cos(angle) * distance + 'px';
        const moveY = Math.sin(angle) * distance + 'px';

        // Truyền biến vào CSS keyframes
        particle.style.setProperty('--x', moveX);
        particle.style.setProperty('--y', moveY);

        container.appendChild(particle);

        // Xóa hạt pháo hoa sau khi diễn ra animation xong để tránh lag trang
        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
}

// Thêm một chút bộ đếm thời gian cho có không khí (Ví dụ đếm ngược hoặc chạy giờ)
function updateClock() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    document.getElementById('countdown').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();