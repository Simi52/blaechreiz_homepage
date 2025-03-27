document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded, fetching events...");

    // Select buttons and page elements
    const page1Btn = document.getElementById('page1Btn');
    const page2Btn = document.getElementById('page2Btn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const eventDetails = document.getElementById("event-details");

    const impressionsGallery = document.getElementById("impressions-gallery");
    const imageFolder = "Gallery/Impressionen/";
    const imageCount = 12; // Number of images to display
            
    for (let i = 1; i <= imageCount; i++) {
        let img = document.createElement("img");
        img.src = `${imageFolder}Image${i}.png`;
        img.alt = `Impression ${i}`;
        img.classList.add("impression-img");
        impressionsGallery.appendChild(img);
    }

    // Ensure elements exist before adding event listeners
    if (page1Btn && page2Btn && page1 && page2) {
        // Event listener for Page 1 button
        page1Btn.addEventListener('click', () => {
            page1.style.display = 'block'; // Show Page 1
            page2.style.display = 'none'; // Hide Page 2
            setActiveButton(page1Btn);
        });

        // Event listener for Page 2 button
        page2Btn.addEventListener('click', () => {
            page1.style.display = 'none'; // Hide Page 1
            page2.style.display = 'block'; // Show Page 2
            setActiveButton(page2Btn);
        });

        function setActiveButton(activeButton) {
            page1Btn.classList.remove('active');
            page2Btn.classList.remove('active');
            activeButton.classList.add('active');
        }
    }

    // Fetch and display the next upcoming event
    if (eventDetails) {
        fetch("Data/events.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(events => {
                console.log("Events loaded:", events);
                const today = new Date();

                // Filter future events and sort by date
                const upcomingEvents = events
                    .filter(event => new Date(event.date) >= today)
                    .sort((a, b) => new Date(a.date) - new Date(b.date));

                if (upcomingEvents.length === 0) {
                    eventDetails.innerHTML = "<p>Keine bevorstehenden Events</p>";
                } else {
                    const nextEvent = upcomingEvents[0];
                    const eventDate = new Date(nextEvent.date);
                    const formattedDate = eventDate.toLocaleDateString("de-DE", { 
                        day: "2-digit", 
                        month: "long", 
                        year: "numeric" 
                    });

                    eventDetails.innerHTML = `
                        <strong>${nextEvent.name}</strong><br>
                        ${formattedDate} um ${nextEvent.time}<br>
                        ${nextEvent.location}<br>
                        ${nextEvent.description}
                    `;
                }
            })
            .catch(error => {
                console.error("Error loading events:", error);
                eventDetails.innerHTML = "Fehler beim Laden der Events.";
            });
    }
});
