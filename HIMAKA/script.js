document.getElementById('formHimaka')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    // Animasi sukses sederhana
    alert('Halo ' + name + '! Pesan Anda telah terkirim melalui jalur aman HIMAKA UMBY.');
    this.reset();
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(197, 160, 89, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});