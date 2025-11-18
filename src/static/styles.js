// Example: Add a highlight effect to the participants section when a new participant is added

export function highlightParticipantsSection(activityCard) {
  const section = activityCard.querySelector('.participants-section');
  if (section) {
    section.style.transition = 'background 0.5s';
    section.style.background = '#e0ffe0';
    setTimeout(() => {
      section.style.background = '#f8f9fa';
    }, 800);
  }
}
