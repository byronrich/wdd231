// Display visit message using localStorage
const messageArea = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    messageArea.textContent = "Back so soon! Awesome!";
  } else {
    messageArea.textContent = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
  }
}
localStorage.setItem("lastVisit", now);

// Load JSON data and build attraction cards
fetch("data/attractions.json")
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById("discover-grid");

    data.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.gridArea = `card${index + 1}`;

      const title = document.createElement("h2");
      title.textContent = item.title;

      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.title || "Attraction image";
      image.loading = "lazy";
      figure.appendChild(image);

      const address = document.createElement("address");
      address.textContent = item.address;

      const description = document.createElement("p");
      description.textContent = item.description;

      const button = document.createElement("button");
      button.textContent = "Learn More";
      button.setAttribute("aria-label", `Learn more about ${item.title}`);

      card.appendChild(title);
      card.appendChild(figure);
      card.appendChild(address);
      card.appendChild(description);
      card.appendChild(button);

      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading attractions:", error);
    messageArea.textContent = "Sorry, we couldn't load the attractions at this time.";
  });
