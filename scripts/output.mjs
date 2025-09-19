export function setTitle(course) {
  document.querySelector("#courseTitle").textContent = `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
  const html = sections.map(section =>
    `<tr>
      <td>${section.sectionNumber}</td>
      <td>${section.enrolled}</td>
      <td>${section.capacity}</td>
    </tr>`
  ).join("");
  document.querySelector("#sections").innerHTML = html;
}
