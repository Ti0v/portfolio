// تهيئة تأثير Matrix Rain
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// إضافة الكانفاس إلى القسم الرئيسي
const hero = document.querySelector('.hero');
canvas.className = 'matrix-rain';
hero.insertBefore(canvas, hero.firstChild);

// تحديد حجم الكانفاس
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// الحروف المستخدمة في التأثير
const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(0);

// إنشاء التدرج اللوني
const gradientColors = ['#00d4ff', '#ff0080'];
let currentColorIndex = 0;

// دالة للحصول على اللون المتدرج
function getGradientColor(y) {
    const normalizedY = y / canvas.height;
    const color1 = gradientColors[0];
    const color2 = gradientColors[1];
    
    // تحويل الألوان إلى RGB
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);
    
    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);
    
    // حساب اللون المتدرج
    const r = Math.floor(r1 + (r2 - r1) * normalizedY);
    const g = Math.floor(g1 + (g2 - g1) * normalizedY);
    const b = Math.floor(b1 + (b2 - b1) * normalizedY);
    
    return `rgb(${r},${g},${b})`;
}

// رسم تأثير Matrix
function draw() {
    // إضافة طبقة شفافة سوداء لتأثير التلاشي
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // تعيين حجم الخط
    ctx.font = fontSize + 'px monospace';

    // رسم الحروف
    for (let i = 0; i < drops.length; i++) {
        // اختيار حرف عشوائي
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // تعيين لون الحرف باستخدام التدرج
        ctx.fillStyle = getGradientColor(drops[i] * fontSize);
        
        // رسم الحرف
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // إضافة توهج للحروف
        ctx.shadowBlur = 5;
        ctx.shadowColor = ctx.fillStyle;

        // إعادة تعيين الحرف إلى الأعلى عند وصوله للأسفل
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // تحريك الحرف للأسفل
        drops[i]++;
    }

    // إعادة تعيين التوهج
    ctx.shadowBlur = 0;
}

// تشغيل التأثير
setInterval(draw, 33);
