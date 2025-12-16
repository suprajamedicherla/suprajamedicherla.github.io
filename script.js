document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DYNAMIC YEAR ---
    // Automatically sets the current year in the footer so you never have to update it manually.
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. DARK MODE TOGGLE ---
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if user has a saved preference in local storage
    const currentTheme = localStorage.getItem('theme');
    
    // Apply saved theme on load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️'; // Change icon to Sun
    }

    // Listen for button click
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        let theme = 'light';
        
        // If dark mode is active, switch icon and save preference
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
            toggleBtn.textContent = '☀️';
        } else {
            toggleBtn.textContent = '🌙';
        }
        
        // Save preference to browser memory
        localStorage.setItem('theme', theme);
    });
});
