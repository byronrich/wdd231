// Current Year
const yearSpan = document.querySelector('#currentyear');
const currentYear = new Date().getFullYear();
if (yearSpan) yearSpan.textContent = currentYear;

// Last Modified
const lastModifiedSpan = document.querySelector('#lastModified');
const lastModified = document.lastModified || new Date().toDateString();
if (lastModifiedSpan) lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
