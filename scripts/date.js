// Current Year
const yearSpan = document.querySelector('#currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Last Modified
const lastModifiedSpan = document.querySelector('#lastModified');
lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
