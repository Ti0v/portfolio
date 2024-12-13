// تفعيل القائمة المنسدلة
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // تغيير خلفية الهيدر عند السكرول
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // تحديث الحالة الأولية

    // فتح وإغلاق قائمة الموبايل
    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('active');
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');

        // تبديل أيقونة القائمة
        const icon = menuBtn.querySelector('i');
        if (isOpen) {
            icon.className = 'fas fa-bars';
        } else {
            icon.className = 'fas fa-times';
        }
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // إغلاق القائمة عند النقر على الروابط
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !menuBtn.contains(e.target)) {
            toggleMenu();
        }
    });

    // منع انتشار النقر داخل القائمة
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // تحديث الروابط النشطة عند التمرير
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // تحديث الحالة الأولية
});
