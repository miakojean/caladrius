const hamburger = document.getElementById('hamburger');
        const dashboard = document.querySelector('.dashboard');
        hamburger.addEventListener('click', () => {
            dashboard.classList.toggle('active');
        });