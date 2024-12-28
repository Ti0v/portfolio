document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and projects
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Get the filter value
            const filter = this.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                // Remove show class for animation
                card.classList.remove('show');
                
                // Get project category
                const category = card.getAttribute('data-category');
                
                // Show/hide projects based on filter
                if (filter === 'all' || filter === category) {
                    // Add show class with delay for animation
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 100);
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Show all projects initially
    projectCards.forEach(card => {
        card.classList.add('show');
    });
});
