document.addEventListener("DOMContentLoaded", function () {
    fetch("Data/events.json")
        .then(response => response.json())
        .then(events => {
            const eventList = document.getElementById("events-list");
            const today = new Date();
            today.setHours(0, 0, 0, 0);
<<<<<<< HEAD
=======
            
>>>>>>> d7beb0c6e0b3674d398f9dd317cbc91cb8a40ee6
            // Filter future events
            const upcomingEvents = events.filter(event => new Date(event.date) >= today);

            // Display events
            if (upcomingEvents.length === 0) {
                eventList.innerHTML = "<p>Keine bevorstehenden Events</p>";
            } else {
                upcomingEvents.forEach(event => {
                    const eventCard = document.createElement("div");
                    const eventDate = new Date(event.date);
                    const formattedDate = eventDate.toLocaleDateString("de-DE", { 
                        day: "2-digit", 
                        month: "long", 
                        year: "numeric" 
                    });
                    eventCard.classList.add("event-card");
                    eventCard.innerHTML = `
                        <div class="event-text">
                            <h2>${event.name}</h2>
                            <p><strong>Datum:</strong> ${formattedDate}</p>
                            <p><strong>Zeit:</strong> ${event.time}</p>
                            <p><strong>Ort:</strong> ${event.location}</p>
                            <p>${event.description}</p>
                        </div>
                        ${event.image ? `<img src="${event.image}" alt="${event.name}" class="event-image">` : ""}
                    `;
                    eventList.appendChild(eventCard);
                });
            }
        })
        .catch(error => console.error("Error loading events:", error));
});
