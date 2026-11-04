
// Information for CV cards
const cardDetails = {
    "Skills": [
        "Java",
        "Python",
        "C Programming",
        "HTML & CSS",
        "MySQL",
        "Flask",
        "AI & Machine Learning",
        "OOP, DBMS, Data Structures"
    ],

    "Projects": [
        "StructureCare - Building Monitoring System",
        "Smart Onion Grading System",
        "Personal Portfolio Card"
    ],

    "Education": [
        "B.Tech Computer Science & Engineering",
        "MITCORER, Barshi",
        "Currently studying in Third Year",
        "Expected Graduation: 2028"
    ],

    "Experience": [
        "Smart India Hackathon 2026 - Team Leader",
        "Academic Project Development",
        "First Prize - Prompt Engineering Competition",
        "Technical Training and Practice"
    ]
};

// Select all information cards
const cards = document.querySelectorAll(".info-grid .card");

// Add click functionality
cards.forEach(card => {

    const heading = card.querySelector("h2");
    const title = heading.textContent.trim();

    // Create details container
    const details = document.createElement("div");
    details.className = "card-details";
    details.hidden = true;

    // Add information
    const items = cardDetails[title] || [];

    items.forEach(item => {
        const paragraph = document.createElement("p");
        paragraph.textContent = "• " + item;
        details.appendChild(paragraph);
    });

    card.appendChild(details);

    // Make card accessible by keyboard
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-expanded", "false");

    // Toggle details
    function toggleDetails() {
        const isOpen = !details.hidden;

        details.hidden = isOpen;

        card.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );
    }

    card.addEventListener("click", toggleDetails);

    card.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleDetails();
        }
    });

});

// Contact button smooth scrolling
document.querySelector(".contact-btn").addEventListener("click", function() {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});
