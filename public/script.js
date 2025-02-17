function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            if (reveals[i]) {
                reveals[i].classList.add("active");
            }
        } else {
            if (reveals[i]) {
                reveals[i].classList.remove("active");
            }
        }
    }
}
document.addEventListener("scroll", reveal);