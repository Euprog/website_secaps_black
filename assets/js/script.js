// ===================================
// SecapsBlack - Premium Interactivity
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initScrollAnimations();
    initSmoothScroll();
    initProductCards();
    initParallaxEffect();
    initHeroCarousel();
});

// ===================================
// Header Navigation and Mobile Menu
// ===================================
function initHeader() {
    const header = document.getElementById('header');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const headerNav = document.getElementById('headerNav');
    const menuLinks = document.querySelectorAll('.header-menu-item a, .header-cta');
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('active');
            
            // Update icon
            if (headerNav.classList.contains('active')) {
                mobileMenuToggle.textContent = '✕';
            } else {
                mobileMenuToggle.textContent = '☰';
            }
        });
        
        // Close mobile menu when clicking menu items
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    headerNav.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && headerNav.classList.contains('active')) {
                headerNav.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            }
        });
    }
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}


// ===================================
// Scroll Animations with Intersection Observer
// ===================================
function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-fade');
    
    const elementInView = (el, offset = 50) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        
        // Verifica se o elemento está visível na tela
        return (
            rect.top <= windowHeight - offset &&
            rect.bottom >= offset
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 50)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Initial check for elements already in view
    handleScrollAnimation();
    
    // Throttle scroll event for better performance
    let throttleTimer;
    const throttle = (callback, time) => {
        if (throttleTimer) return;
        throttleTimer = true;
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    };
    
    window.addEventListener('scroll', () => {
        throttle(handleScrollAnimation, 100);
    });
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 80px offset for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Product Cards Interactive Effects
// ===================================
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Mouse move effect for subtle tilt
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
        
        // Click animation
        card.addEventListener('click', () => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'pulse 0.5s ease-in-out';
            }, 10);
        });
    });
}

// ===================================
// Parallax Effect for Hero Section
// ===================================
function initParallaxEffect() {
    const heroImage = document.querySelector('.hero-image');
    
    if (!heroImage) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;
                
                // Only apply parallax in hero section
                if (scrolled < window.innerHeight) {
                    heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ===================================
// Hero Carousel
// ===================================
function initHeroCarousel() {
    const carouselImages = document.querySelectorAll('.hero-carousel img');
    if (!carouselImages.length) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        // Remove active class from current image
        carouselImages[currentIndex].classList.remove('active');
        
        // Calculate next index
        currentIndex = (currentIndex + 1) % carouselImages.length;
        
        // Add active class to next image
        carouselImages[currentIndex].classList.add('active');
    }, 3000); // Change every 3 seconds
}

// ===================================
// Add pulse animation to CSS dynamically
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(1);
        }
    }
    
    .product-card {
        transition: transform 0.3s ease-out;
    }
`;
document.head.appendChild(style);

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Enhanced Button Interactions
// ===================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    // Ripple effect on click
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===================================
// Cards Hover Effects Enhancement
// ===================================
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ===================================
// Scroll Progress Indicator (Optional Enhancement)
// ===================================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00F2E6 0%, #33F5EB 100%);
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// ===================================
// Console Branding (Easter Egg)
// ===================================
console.log('%c SecapsBlack ', 'background: linear-gradient(90deg, #00F2E6 0%, #33F5EB 100%); color: #000000; font-size: 20px; font-weight: bold; padding: 10px 20px;');
console.log('%c Premium Quality • Extraordinary Results ', 'color: #00F2E6; font-size: 14px; font-weight: 600;');

// ===================================
// Lightbox Functionality
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
});

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const productImages = document.querySelectorAll('.product-image img');

    if (!lightbox || !lightboxImg || !closeBtn) return;

    // Open lightbox
    productImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Disable scrolling
        });
    });

    // Close lightbox functions
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    closeBtn.addEventListener('click', closeLightbox);

    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
}

// ===================================
// Carousel Functionality
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    // Get original slides
    let slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const dotsNav = document.querySelector('.carousel-nav');
    const dots = Array.from(dotsNav.children);

    // Clone first and last slides for seamless looping
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';
    
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    // Re-query slides to include clones
    slides = Array.from(track.children);

    let slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Start at index 1 (the first real slide)
    let counter = 1;
    track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    
    // Set initial active dot
    dots[0].classList.add('current-slide');

    const updateDots = (index) => {
        dots.forEach(dot => dot.classList.remove('current-slide'));
        // Adjust index for dots (0-based, ignoring clones)
        // counter 1 -> dot 0
        // counter length-2 -> dot length-1
        let dotIndex = index - 1;
        if (dotIndex < 0) dotIndex = dots.length - 1;
        if (dotIndex >= dots.length) dotIndex = 0;
        
        if (dots[dotIndex]) {
            dots[dotIndex].classList.add('current-slide');
        }
    };

    const moveToSlide = (index) => {
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
        counter = index;
        updateDots(counter);
    };

    // Button Listeners
    nextButton.addEventListener('click', () => {
        if (counter >= slides.length - 1) return;
        moveToSlide(counter + 1);
        stopSlide();
        startSlide();
        nextButton.blur(); // Remove focus
    });

    prevButton.addEventListener('click', () => {
        if (counter <= 0) return;
        moveToSlide(counter - 1);
        stopSlide();
        startSlide();
        prevButton.blur(); // Remove focus
    });

    // Handle Transition End for Infinite Loop
    track.addEventListener('transitionend', () => {
        if (slides[counter].id === 'last-clone') {
            track.style.transition = 'none';
            counter = slides.length - 2;
            track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        }
        if (slides[counter].id === 'first-clone') {
            track.style.transition = 'none';
            counter = 1;
            track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        }
    });

    // Dot Navigation
    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        // Map dot index to slide index (add 1 because of first clone)
        moveToSlide(targetIndex + 1);
        stopSlide();
        startSlide();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach(setSlidePosition);
        track.style.transition = 'none';
        track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    });

    // Auto-play functionality
    let slideInterval;

    const stopSlide = () => {
        clearInterval(slideInterval);
    };

    const startSlide = () => {
        stopSlide(); // Clear any existing interval
        slideInterval = setInterval(() => {
            if (counter >= slides.length - 1) return;
            moveToSlide(counter + 1);
        }, 3000); // Change slide every 3 seconds
    };

    // Start auto-play
    startSlide();

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopSlide);
    carouselContainer.addEventListener('mouseleave', startSlide);
}

// ===================================
// E-books Carousel Functionality
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initEbooksCarousel();
});

function initEbooksCarousel() {
    const track = document.getElementById('ebooksCarouselTrack');
    if (!track) return;

    // Get original slides
    let slides = Array.from(track.children);
    const nextButton = document.getElementById('ebooksNextBtn');
    const prevButton = document.getElementById('ebooksPrevBtn');
    const dotsNav = document.getElementById('ebooksCarouselNav');
    const dots = Array.from(dotsNav.children);

    // Clone first and last slides for seamless looping
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    firstClone.id = 'ebooks-first-clone';
    lastClone.id = 'ebooks-last-clone';
    
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    // Re-query slides to include clones
    slides = Array.from(track.children);

    let slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Start at index 1 (the first real slide)
    let counter = 1;
    track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    
    // Set initial active dot
    dots[0].classList.add('current-slide');

    const updateDots = (index) => {
        dots.forEach(dot => dot.classList.remove('current-slide'));
        let dotIndex = index - 1;
        if (dotIndex < 0) dotIndex = dots.length - 1;
        if (dotIndex >= dots.length) dotIndex = 0;
        
        if (dots[dotIndex]) {
            dots[dotIndex].classList.add('current-slide');
        }
    };

    const moveToSlide = (index) => {
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
        counter = index;
        updateDots(counter);
    };

    // Button Listeners
    nextButton.addEventListener('click', () => {
        if (counter >= slides.length - 1) return;
        moveToSlide(counter + 1);
        stopEbooksSlide();
        startEbooksSlide();
        nextButton.blur();
    });

    prevButton.addEventListener('click', () => {
        if (counter <= 0) return;
        moveToSlide(counter - 1);
        stopEbooksSlide();
        startEbooksSlide();
        prevButton.blur();
    });

    // Handle Transition End for Infinite Loop
    track.addEventListener('transitionend', () => {
        if (slides[counter].id === 'ebooks-last-clone') {
            track.style.transition = 'none';
            counter = slides.length - 2;
            track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        }
        if (slides[counter].id === 'ebooks-first-clone') {
            track.style.transition = 'none';
            counter = 1;
            track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        }
    });

    // Dot Navigation
    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        moveToSlide(targetIndex + 1);
        stopEbooksSlide();
        startEbooksSlide();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach(setSlidePosition);
        track.style.transition = 'none';
        track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    });

    // Auto-play functionality
    let ebooksSlideInterval;

    const stopEbooksSlide = () => {
        clearInterval(ebooksSlideInterval);
    };

    const startEbooksSlide = () => {
        stopEbooksSlide();
        ebooksSlideInterval = setInterval(() => {
            if (counter >= slides.length - 1) return;
            moveToSlide(counter + 1);
        }, 3000);
    };

    // Start auto-play
    startEbooksSlide();

    // Pause on hover
    const ebooksCarouselContainer = document.querySelector('#ebooks .carousel-container');
    if (ebooksCarouselContainer) {
        ebooksCarouselContainer.addEventListener('mouseenter', stopEbooksSlide);
        ebooksCarouselContainer.addEventListener('mouseleave', startEbooksSlide);
    }
}
