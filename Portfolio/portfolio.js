document.addEventListener("DOMContentLoaded", function() {
    var elementsToHandle = ["logo", "mail", "mail1"];
    function handleScroll() {
        elementsToHandle.forEach(function(id) {
            var elementToHide = document.getElementById(id);
            if (elementToHide) {
                if (window.scrollY > 200) {
                    elementToHide.style.opacity = "0";
                } else {
                    elementToHide.style.opacity = "1";
                }
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});


