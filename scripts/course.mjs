const byuiCourse = {
  code: "CSE121b",
  name: "Web Development",
  sections: [
    { sectionNumber: 1, enrolled: 26, capacity: 30 },
    { sectionNumber: 2, enrolled: 28, capacity: 30 },
    { sectionNumber: 3, enrolled: 30, capacity: 30 }
  ],
  enrollStudent(sectionNum) {
    const section = this.sections.find(s => s.sectionNumber == sectionNum);
    if (section && section.enrolled < section.capacity) {
      section.enrolled++;
    }
  },
  dropStudent(sectionNum) {
    const section = this.sections.find(s => s.sectionNumber == sectionNum);
    if (section && section.enrolled > 0) {
      section.enrolled--;
    }
  },
  changeEnrollment(sectionNum, add = true) {
    if (add) {
      this.enrollStudent(sectionNum);
    } else {
      this.dropStudent(sectionNum);
    }
    // Removed renderSections() call as instructed
  }
};

export default byuiCourse;
