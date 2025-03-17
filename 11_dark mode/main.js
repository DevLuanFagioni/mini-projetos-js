const toggleButton = document.getElementById('toggle-mode');
const html = document.documentElement;

toggleButton.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
});