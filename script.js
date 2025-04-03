// Add interactive animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.law-card');
    
    // Animate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
// ===== NEW DARK MODE FUNCTIONALITY =====
function initDarkMode() {
    const toggleBtn = document.getElementById('darkModeToggle');
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        toggleBtn.textContent = '☀️ Light Mode';
    }
}

// ===== NEW SEARCH FUNCTIONALITY =====
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    if (!searchBtn) return;
    
    searchBtn.addEventListener('click', () => {
        const query = document.getElementById('searchInput').value.toLowerCase();
        document.querySelectorAll('.law-card').forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(query) ? 'block' : 'none';
        });
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initSearch();
    
    // Keep your existing animation code here
    const cards = document.querySelectorAll('.law-card');
    // ... (your original animation code)
});
