document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            if (section.classList.contains('fashion')) {
                window.location.href = 'fashion.html';
            }
            else if (section.classList.contains('picture')) {
                window.location.href = 'picture.html';
            }
            else if (section.classList.contains('vinyl')) {
                window.location.href = 'vinyl.html';
            }
            else if (section.classList.contains('trip')) {
                window.location.href = 'trip.html';
            }
        });
        section.style.cursor = 'pointer';
    });
});

