// إنشاء العناصر المتحركة في الخلفية
function createTechAnimation() {
    const container = document.querySelector('.tech-animation');
    
    // إنشاء الجزيئات
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
    }
    
    // إنشاء الخطوط
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'tech-line';
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(line);
    }
    
    // إنشاء الدوائر
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.className = 'tech-circle';
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(circle);
    }
}

// تشغيل الأنيميشن عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', createTechAnimation);
