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

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menubro');
    const navbarLinks = document.querySelectorAll('.navbar a:not(.menubro)');
    const sections = document.querySelectorAll('.headcontent');

    menuIcon.addEventListener('click', function() {
        navbarLinks.forEach(link => {
            link.style.display = link.style.display === 'none' ? 'inline-block' : 'none';
        });

        sections.forEach(section => {
            section.style.filter = section.style.filter === 'blur(10px)' ? 'none' : 'blur(10px)';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link, .icons");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})
});