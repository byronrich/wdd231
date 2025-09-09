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
  if (!courseContainer || !creditTotal) return;

  courseContainer.innerHTML = '';
  const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
  creditTotal.textContent = totalCredits;

  courseList.forEach(course => {
    const card = document.createElement('div');
    card.className = course.completed ? 'course completed' : 'course';
    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;
    courseContainer.appendChild(card);
  });
}

// Filter buttons
document.querySelector('#all')?.addEventListener('click', () => renderCourses(courses));
document.querySelector('#wdd')?.addEventListener('click', () => {
  renderCourses(courses.filter(course => course.code.startsWith('WDD')));
});
document.querySelector('#cse')?.addEventListener('click', () => {
  renderCourses(courses.filter(course => course.code.startsWith('CSE')));
});

// Initial render
renderCourses(courses);
