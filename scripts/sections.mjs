export function populateSections(sections) {
  const select = document.querySelector("#sectionNumber");
  select.innerHTML = sections
    .map(section => `<option value="${section.sectionNumber}">${section.sectionNumber}</option>`)
    .join("");
}
