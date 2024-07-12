$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
            
    });

    // slide up script
    $('.scroll-up-btn').click(function(){
        $(`html`).animate({scrollTop: 0})
    });

    $('.menu-btn').click(function() {
        $('.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

// typing animation  script
var typed = new Typed(".typing",{
    strings: ["Junior Web Developer","Gamer",""],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
})
var typed = new Typed(".typing-2",{
    strings: ["Junior Web Developer","Gamer",""],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
})

document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('show');
});

window.addEventListener('scroll', function() {
    const scrollBtn = document.querySelector('.scroll-up-btn');
    if (window.scrollY > 100) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

document.querySelector('.scroll-up-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


function toggleMenu() {
        const links = document.getElementById('links');
        links.classList.toggle('active');
    }
document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('show');
    });
    