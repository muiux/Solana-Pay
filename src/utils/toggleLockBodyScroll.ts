export const toggleLockBodyScroll = () => {
  const body = document.body;
  if (body.style.overflow === 'hidden') {
    // Un-lock it
    body.style.overflow = 'visible'
  } else {
    // Lock it
    body.style.overflow = 'hidden';
  }
}