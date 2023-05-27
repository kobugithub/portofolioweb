document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    // Menutup menu hamburger saat salah satu menu dipilih
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
        });
    });
});

document.addEventListener('click', function (event) {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
  
    if (!header.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('open');
    }
});

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Format pesan yang akan dikirim melalui WhatsApp
    const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;

    // Nomor WhatsApp tujuan
    const phoneNumber = '628881208702';

    // URL WhatsApp dengan parameter pesan
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Membuka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
});

window.addEventListener('scroll', function() {
    var button = document.querySelector('.back-to-top-btn');
    if (window.pageYOffset > 100) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.social-media a');
  
    socialLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        const social = this.getAttribute('data-social');
        openSocialMedia(url, social);
      });
    });
  
    function openSocialMedia(url, social) {
      window.open(url, '_blank');
    }
  });