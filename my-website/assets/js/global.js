const HOME_PATH = `${window.location.protocol}//${window.location.host}/my-website/index.html`;

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            if (section.classList.contains('portfolio')) {
                window.location.href = 'pages/portfolio/portfolio.html';
            }
            else if (section.classList.contains('fashion')) {
                window.location.href = 'pages/fashion/fashion.html';
            }
            else if (section.classList.contains('music')) {
                window.location.href = 'pages/music/music.html';
            }
            else if (section.classList.contains('trip')) {
                window.location.href = 'pages/trip/trip.html';
            }
        });
        section.style.cursor = 'pointer';
    });
});

const headerHTML = `
    <div class="header">
        <h1>Joonhyun Heo</h1>
        <a href="${HOME_PATH}" class="home-btn">Home</a>
    </div>
`;

const footerHTML = `
    <div class="footer">
        <div class="contact-info">
            <a href="mailto:joonhyunheo9609@gmail.com" class="contact-link email">
                joonhyunheo9609@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/joonhyun-heo-93b848330/" target="_blank" class="contact-link linkedin">
                Linkedin
            </a>
            <a href="https://github.com/joonhyunheo9609/" target="_blank" class="contact-link github">
                Github
            </a>
            <a href="https://instagram.com/hon_bul" target="_blank" class="contact-link instagram">
                Instagram
            </a>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    // header
    const headerContainer = document.getElementsByClassName('header')[0];
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // footer
    const footerContainer = document.getElementsByClassName('footer')[0];
    if(footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});