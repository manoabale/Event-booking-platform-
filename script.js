const events = [
  { id: 1, title: "Music Concert", city: "Lagos", date: "2026-08-15", price: "$50" },
  { id: 2, title: "Tech Conference", city: "Abuja", date: "2026-09-10", price: "$100" },
  { id: 3, title: "Art Exhibition", city: "Port Harcourt", date: "2026-07-30", price: "$30" }
];

function displayEvents(list) {
  const container = document.getElementById("events");
  container.innerHTML = "";
  list.forEach(e => {
    const div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `
      <h3>${e.title}</h3>
      <p>City: ${e.city}</p>
      <p>Date: ${e.date}</p>
      <p>Price: ${e.price}</p>
    `;
    container.appendChild(div);
  });
}

function filterEvents() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = events.filter(e => e.city.toLowerCase().includes(query));
  displayEvents(filtered);
}

function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tickets = document.getElementById("tickets").value;

  alert(`Booking confirmed!\nName: ${name}\nEmail: ${email}\nTickets: ${tickets}`);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("tickets").value = "";
}

displayEvents(events);
