document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            if (section.classList.contains('portfolio')) {
                window.location.href = 'pages/portfolio.html';
            }
            else if (section.classList.contains('fashion')) {
                window.location.href = 'pages/fashion.html';
            }
            else if (section.classList.contains('music')) {
                window.location.href = 'pages/music.html';
            }
            else if (section.classList.contains('trip')) {
                window.location.href = 'pages/trip.html';
            }
        });
        section.style.cursor = 'pointer';
    });
});



