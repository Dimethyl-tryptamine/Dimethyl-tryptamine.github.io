const displayBox = document.getElementById("portray");

// Front-End Development button content
const frontEndContent = {
    languages: "<p>This is the content for Front-end Development (Languages)</p>",
    frameworks: "<p>This is the content for Front-end Development (Frameworks)</p>",
    tools: "<p>This is the content for Front-end Development (Tools)</p>",
    empty: "<p>This is the content for Front-end Development (Empty)</p>"
};

// Back-End Development button content
const backEndContent = {
    languages: "<p>This is the content for Back-End Development (Languages)</p>",
    frameworks: "<p>This is the content for Back-End Development (Frameworks)</p>",
    databases: "<p>This is the content for Back-End Development (Databases)</p>",
    empty: "<p>This is the content for Back-End Development (Empty)</p>"
};

// DevOps & Deployment button content
const devOpsContent = {
    versionControl: "<p>This is the content for DevOps & Deployment (Version Control)</p>",
    containerization: "<p>This is the content for DevOps & Deployment (Containerization)</p>",
    tools: "<p>This is the content for DevOps & Deployment (Tools)</p>",
    cloud: "<p>This is the content for DevOps & Deployment (Cloud)</p>"
};

// Testing & Quality Assurance button content
const qaContent = {
    frameworks: "<p>This is the content for Testing & Quality Assurance (Frameworks)</p>",
    testing: "<p>This is the content for Testing & Quality Assurance (Testing)</p>",
    empty: "<p>This is the content for Testing & Quality Assurance (Empty)</p>",
    empty1: "<p>This is the content for Testing & Quality Assurance (Empty1)</p>"
};

// Function to set content based on the selected button
function setContent(content) {
    displayBox.innerHTML = content;
}

// Adding event listeners for Front-End Development buttons
document.getElementById("fd-Languages").addEventListener("click", () => setContent(frontEndContent.languages));
document.getElementById("fd-Frameworks").addEventListener("click", () => setContent(frontEndContent.frameworks));
document.getElementById("fd-Tools").addEventListener("click", () => setContent(frontEndContent.tools));

// Adding event listeners for Back-End Development buttons
document.getElementById("be-Languages").addEventListener("click", () => setContent(backEndContent.languages));
document.getElementById("be-Frameworks").addEventListener("click", () => setContent(backEndContent.frameworks));
document.getElementById("be-Databases").addEventListener("click", () => setContent(backEndContent.databases));

// Adding event listeners for DevOps & Deployment buttons
document.getElementById("dev-VersionControl").addEventListener("click", () => setContent(devOpsContent.versionControl));
document.getElementById("dev-Containerization").addEventListener("click", () => setContent(devOpsContent.containerization));
document.getElementById("dev-Tools").addEventListener("click", () => setContent(devOpsContent.tools));
document.getElementById("dev-Cloud").addEventListener("click", () => setContent(devOpsContent.cloud));

// Adding event listeners for Testing & Quality Assurance buttons
document.getElementById("qa-Frameworks").addEventListener("click", () => setContent(qaContent.frameworks));
document.getElementById("qa-Testing").addEventListener("click", () => setContent(qaContent.testing));


///// must fix DevOps & Deployment	Testing & Quality Assurance not showing up when clicked on webpage / .portray