const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD231", name: "Front-End Web Development I", credits: 3, completed: true },
  { code: "WDD331", name: "Front-End Web Development II", credits: 3, completed: false },
  { code: "CSE110", name: "Introduction to Programming", credits: 2, completed: true },
  { code: "CSE210", name: "Programming with Classes", credits: 3, completed: false },
  { code: "CSE222", name: "Data Structures", credits: 3, completed: false }
];

const courseContainer = document.querySelector('#courses');
const creditTotal = document.querySelector('#creditTotal');

function renderCourses(courseList) {
  courseContainer.innerHTML = '';
  let totalCredits = 0;

  courseList.forEach(course => {
    const card = document.createElement('div');
    card.className = course.completed ? 'course completed' : 'course';

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;

    courseContainer.appendChild(card);
    totalCredits += course.credits;
  });

  creditTotal.textContent = totalCredits;
}

// Filter buttons
document.querySelector('#all').addEventListener('click', () => {
  renderCourses(courses);
});

document.querySelector('#wdd').addEventListener('click', () => {
  const filtered = courses.filter(course => course.code.startsWith('WDD'));
  renderCourses(filtered);
});

document.querySelector('#cse').addEventListener('click', () => {
  const filtered = courses.filter(course => course.code.startsWith('CSE'));
  renderCourses(filtered);
});

// Initial render
renderCourses(courses);
