async function loadSpotlights() {
  try {
    const res = await fetch('data/members.json');
    const data = await res.json();

    const goldSilver = data.members.filter(m => ['Gold', 'Silver'].includes(m.membership));
    const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';

    selected.forEach(member => {
      container.innerHTML += `
        <div class="spotlight-card">
          <img src="images/logos/${member.logo}" alt="${member.name} logo" />
          <h3>${member.name}</h3>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>Membership:</strong> ${member.membership}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error("Spotlight loading error:", error);
  }
}

loadSpotlights();
