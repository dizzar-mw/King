// 1. Navigation Logic
function showPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the clicked section
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Close mobile menu if you have one
    window.scrollTo(0, 0);
}

// 2. Theme Logic
function changeTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dizzar-theme', theme);

    // Show/Hide Hacker Features
    const isAdmin = document.getElementById('admin-btn');
    const clock = document.getElementById('hacker-clock');
    
    if (theme === 'hacker') {
        isAdmin.classList.remove('hidden');
        clock.classList.remove('hidden');
    } else {
        isAdmin.classList.add('hidden');
        clock.classList.add('hidden');
    }
}

// 3. Admin Logic
function checkAdmin() {
    const pass = prompt("Enter Admin Password:");
    if (pass === "filiru") {
        window.open("https://dizzar-mw.github.io/FiliruPaints", "_blank");
    } else {
        alert("Access Denied");
    }
}

// 4. Hacker Clock
setInterval(() => {
    const now = new Date();
    const clock = document.getElementById('hacker-clock');
    if (clock) clock.innerText = now.toLocaleTimeString();
}, 1000);

// Load saved theme on startup
window.onload = () => {
    const savedTheme = localStorage.getItem('dizzar-theme') || 'light';
    document.getElementById('theme-select').value = savedTheme;
    changeTheme(savedTheme);
};
