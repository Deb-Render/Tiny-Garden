const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Set the initial button text based on the stored theme
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Light mode'; // Set to Light Mode when dark theme is active
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggleBtn.textContent = 'Light'; // Switch to Light Mode
    } else {
        themeToggleBtn.textContent = 'Dark'; // Switch to Dark Mode
    }

    localStorage.setItem('theme', theme);
});

document.querySelector('.portfolio').addEventListener('click', run)

function run() {
    alert("Coming Soon!");
}