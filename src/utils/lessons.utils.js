export const checkIfPrevQuizzesEnabled = (lessons, lessonId) => {
  const currentLessonIndex = lessons.findIndex((lesson) => (lesson.id === lessonId))

  let isLocked = false;
  for(let i = 1; i < currentLessonIndex; i++ ) {
    isLocked = lessons[i].quiz_enabled || isLocked;
  }
  return isLocked;
}
