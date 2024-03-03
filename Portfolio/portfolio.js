// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Define elements to handle scroll behavior
    var elementsToHandle = ["logo", "mail", "mail1"];

    // Function to handle scroll event
    function handleScroll() {
        // Iterate through each element
        elementsToHandle.forEach(function(id) {
            var elementToHide = document.getElementById(id);
            // Check if the element exists
            if (elementToHide) {
                // Check if the user has scrolled down (adjust the threshold as needed)
                if (window.scrollY > 200) {
                    // Hide the element by reducing its opacity
                    elementToHide.style.opacity = "0";
                } else {
                    // Show the element
                    elementToHide.style.opacity = "1";
                }
            }
        });
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call the handleScroll function once to initialize the element visibility
    handleScroll();
});
