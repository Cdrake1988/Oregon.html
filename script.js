// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        loadContent(event.target.id); // Call the loadContent function with the link's id
    });
});

// Function to load the content based on the link clicked
function loadContent(linkId) {
    const contentContainer = document.getElementById('content-container');
    const pageFile = getPageFile(linkId); // Get the page file based on the link's id

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Open the file using the GET method
    xhr.open('GET', pageFile, true);

    // When the file is loaded, update the content container
    xhr.onload = function() {
        if (xhr.status === 200) {
            contentContainer.innerHTML = xhr.responseText;
        } else {
            contentContainer.innerHTML = 'Error loading content.';
        }
    };

    // Send the request
    xhr.send();
}

// Function to get the page file based on the link's id
function getPageFile(linkId) {
    switch (linkId) {
        case 'home-link':
            return 'index.html';
        case 'portland-link':
            return 'portland.html';
        case 'city1-link':
            return 'city-1.html';
        case 'city2-link':
            return 'city-2.html';
        default:
            return 'index.html';
    }
}