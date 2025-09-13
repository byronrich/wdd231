async function loadMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  const container = document.getElementById('members');
  container.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById('gridBtn').addEventListener('click', () => {
  document.getElementById('members').classList.add('grid');
  document.getElementById('members').classList.remove('list');
});

document.getElementById('listBtn').addEventListener('click', () => {
  document.getElementById('members').classList.add('list');
  document.getElementById('members').classList.remove('grid');
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

loadMembers();
