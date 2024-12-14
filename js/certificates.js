// وظائف التحكم في عرض الشهادات
function openCertificateModal(imageSrc) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = imageSrc;
    modal.classList.add('active');
    
    // منع التمرير في الخلفية
    document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('active');
    
    // إعادة تفعيل التمرير
    document.body.style.overflow = '';
}

// إغلاق النافذة المنبثقة عند النقر خارجها
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCertificateModal();
        }
    });

    // إغلاق النافذة المنبثقة عند الضغط على ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCertificateModal();
        }
    });
});
