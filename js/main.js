


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function show(a) {
    $('#portfolio_item').addClass('display')
    $('#' + a).css("display", "block")
    $('#back').css("display", "block")
}

function back() {
    for (n=1; n<=6; n++) {
        if ($('#portfolio' + n).css("display") == 'block') {
            $('#portfolio' + n).css("display", 'none')
            $('#portfolio_item').removeClass('display')
        }
    }
    $('#back').css("display", "none")
}
