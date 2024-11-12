
// Select the display box (the div where content will be injected)
const displayBox = document.getElementById("portray");

// Function to fetch an external HTML file and get a specific element by ID
function fetchAndInjectElement(elementId) {
    // Start the fetch request
    fetch("content.html")
      .then(response => response.text()) // Convert the response to text (HTML content)
      .then(htmlContent => {
        // Create a temporary <div> to hold the fetched HTML
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = htmlContent; // Insert the fetched HTML into this container
  
        // Select the specific element by ID within the fetched HTML
        const specificElement = tempContainer.querySelector(`#${elementId}`);
        if (specificElement) { // Check if the element exists
          // Clear the current content of the display box before adding new content
          displayBox.innerHTML = '';
          // Clone the element and append it to the display box
          displayBox.appendChild(specificElement.cloneNode(true));
        }
  
        // Find and append all stylesheet links from the fetched HTML to preserve CSS
        const externalStyles = tempContainer.querySelectorAll('link[rel="stylesheet"]');
        externalStyles.forEach(styleLink => {
          const newStyleLink = document.createElement('link');
          newStyleLink.rel = 'stylesheet';
          newStyleLink.href = styleLink.href; // Copy the href from the fetched HTML
          document.head.appendChild(newStyleLink); // Add the new <link> to the head
        });
      })
      .catch(error => console.error('Error fetching HTML:', error)); // Error handling
};







// Adding event listeners for Front-End Development buttons
document.getElementById("fd-Languages").addEventListener("click", () => fetchAndInjectElement("fd-Languages"));
document.getElementById("fd-Frameworks").addEventListener("click", () => fetchAndInjectElement("fd-Frameworks"));
document.getElementById("fd-Tools").addEventListener("click", () => fetchAndInjectElement("fd-Tools"));

// Adding event listeners for Back-End Development buttons
document.getElementById("be-Languages").addEventListener("click", () => fetchAndInjectElement("be-Languages"));
document.getElementById("be-Frameworks").addEventListener("click", () => fetchAndInjectElement("be-Frameworks"));
document.getElementById("be-Databases").addEventListener("click", () => fetchAndInjectElement("be-Databases"));

// Adding event listeners for DevOps & Deployment buttons
document.getElementById("dev-VersionControl").addEventListener("click", () => fetchAndInjectElement("dev-VersionControl"));
document.getElementById("dev-Containerization").addEventListener("click", () => fetchAndInjectElement("dev-Containerization"));
document.getElementById("dev-Tools").addEventListener("click", () => fetchAndInjectElement("dev-Tools"));
document.getElementById("dev-Cloud").addEventListener("click", () => fetchAndInjectElement("dev-Cloud"));

// Adding event listeners for Testing & Quality Assurance buttons
document.getElementById("qa-Frameworks").addEventListener("click", () => fetchAndInjectElement("qa-Frameworks"));
document.getElementById("qa-Testing").addEventListener("click", () => fetchAndInjectElement("qa-Testing"));


