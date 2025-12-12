// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#disclaimer' && href !== '#privacy') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and step items
    const animatedElements = document.querySelectorAll('.feature-card, .step-item, .exchange-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Tutorial Tabs
    const tutorialTabs = document.querySelectorAll('.tutorial-tab');
    tutorialTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tutorialTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tutorial-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Reset slider to first slide when switching tabs
            goToSlide(targetTab, 0);
        });
    });

    // Initialize sliders
    initializeSliders();
});

// Slider state
const sliderState = {
    'api-setup': 0,
    'bot-usage': 0
};

const slideCounts = {
    'api-setup': 6,
    'bot-usage': 4
};

function initializeSliders() {
    Object.keys(slideCounts).forEach(sliderId => {
        updateSlider(sliderId);
        updateIndicators(sliderId);
    });
}

function changeSlide(sliderId, direction) {
    const currentSlide = sliderState[sliderId];
    const totalSlides = slideCounts[sliderId];
    let newSlide = currentSlide + direction;
    
    if (newSlide < 0) {
        newSlide = totalSlides - 1;
    } else if (newSlide >= totalSlides) {
        newSlide = 0;
    }
    
    goToSlide(sliderId, newSlide);
}

function goToSlide(sliderId, slideIndex) {
    sliderState[sliderId] = slideIndex;
    updateSlider(sliderId);
    updateIndicators(sliderId);
}

function updateSlider(sliderId) {
    const track = document.getElementById(`${sliderId}-track`);
    if (track) {
        const slideWidth = 100;
        const translateX = -(sliderState[sliderId] * slideWidth);
        track.style.transform = `translateX(${translateX}%)`;
    }
}

function updateIndicators(sliderId) {
    const indicators = document.querySelectorAll(`#${sliderId}-indicators .indicator`);
    indicators.forEach((indicator, index) => {
        if (index === sliderState[sliderId]) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

