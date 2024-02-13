const welcomeMessage = document.getElementById('welcome-message');
const toggleMessageButton = document.getElementById('toggle-message');

toggleMessageButton.addEventListener('click', () => {
  welcomeMessage.classList.toggle('hidden');
});