'use strict';

/* ---- PROJECT DATA ---- */
const projects = [
        {
        id: 'erasio-mobile',
        title: "Erasio – AI Watermark Remover",
        category: 'mobile',
        categoryLabel: '📱 Mobile App',
        emoji: '🖼️',
        image: './images/projects/erasio-mobile.png',
        overview: 'Erasio is an AI-powered image watermark remover designed to help users clean and enhance images quickly and easily. Remove unwanted watermarks, logos, text, and marks from your photos using advanced AI processing and smart editing tools.',
        tech: ['Flutter', 'Dart', 'Riverpod', 'Backend', 'Notification'],
        features: [
            'AI-powered watermark removal',
            'Fast and easy image processing',
            'Import images from gallery',
            'High-quality image output',
            'Simple and clean user interface',
            'Secure image handling',
            'Quick export and sharing',
            'Play Store compliant',
        ],
        challenge: '⚠️ Challenge: Managing user quota and preventing abuse of the free service while ensuring a smooth user experience. ✅ Solution: Implemented a robust backend system that tracks user activity and enforces limits, while providing clear feedback to users about their usage and remaining quota. This approach maintains a high-quality service for all users while preventing abuse and ensuring sustainability.',
        github: 'https://github.com/ArslanAhmad03',
        demo: 'https://play.google.com/store/apps/details?id=com.erasio.erasio_mobile&pcampaignid=web_share',
        tags: ['personal', 'mobile'],
    },
    {
        id: 'status-saver',
        title: 'Status Saver App',
        category: 'mobile',
        categoryLabel: '📱 Mobile App',
        emoji: '💾',
        image: './images/projects/statu_saver1.png',
        overview: 'A WhatsApp & Instagram status saver for Android that supports images and videos. Built with SAF (Storage Access Framework) for Android 10+ compatibility and a 24-hour auto-filter feature.',
        tech: ['Flutter', 'Dart', 'SAF', 'Permission Handler', 'Video Player', 'Hive'],
        features: [
            'Android 10+ SAF support',
            '24-hour status filter',
            'Video playback (all Android)',
            'Auto cache cleanup',
            'Dark/light theme',
            'Play Store compliant',
        ],
        challenge: '⚠️ Challenge: Accessing the hidden .statuses folder on Android 10+ due to scoped storage restrictions. ✅ Solution: Implemented full SAF directory picker flow, letting users grant persistent URI access, fully compliant with Google Play policies.',
        github: 'https://github.com/ArslanAhmad03',
        demo: 'https://play.google.com/store/apps/details?id=com.whats_save.status_saver&pcampaignid=web_share',
        tags: ['personal', 'mobile'],
    },
    {
        id: 'cash-counter',
        title: 'Cash Counter App',
        category: 'mobile',
        categoryLabel: '📱 Mobile App',
        emoji: '💰',
        image: './images/projects/cash_counter.png',
        overview: 'A simple and efficient PKR cash counting app that helps users quickly calculate total cash by entering the number of notes for each denomination. Designed for shopkeepers, cashiers, and daily cash handling.',
        tech: ['Flutter', 'Dart', 'Material UI', 'State Management'],
        features: [
            'PKR denomination support (5000, 1000, 500, etc)',
            'Automatic total calculation',
            'Clean and simple UI',
            'Real-time amount update',
            'Lightweight and fast',
            'Offline functionality',
        ],
        challenge: '⚠️ Challenge: Ensuring instant calculation while keeping the UI responsive when users enter multiple note counts. ✅ Solution: Implemented optimized state updates with efficient input listeners to instantly compute totals without UI lag.',
        github: 'https://github.com/ArslanAhmad03',
        demo: 'https://play.google.com/store/apps/details?id=com.abc.billmaker&pcampaignid=web_share',
        tags: ['personal', 'mobile'],
    },
    {
        id: 'coffee-shop',
        title: 'Coffee Shop App',
        category: 'mobile',
        categoryLabel: '📱 Mobile App',
        emoji: '☕',
        image: './images/projects/coffee_shop.png',
        overview: 'A full-featured Flutter coffee shop ordering app with a beautiful UI, real-time cart management, and seamless ordering flow. Built for a local coffee chain to replace paper-based ordering.',
        tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'Firestore', 'FCM'],
        features: [
            'Real-time menu & availability',
            'Cart with quantity management',
            'Push notification for order status',
            'Order history & tracking',
            'Loyalty points system',
            'Multiple payment options',
        ],
        challenge: '⚠️ Challenge: Syncing real-time inventory with order placement to prevent out-of-stock orders. ✅ Solution: Implemented Firestore transactions with optimistic UI updates and rollback logic, ensuring zero overselling even during peak hours.',
        github: 'https://github.com/ArslanAhmad03/coffee_shop_provider.git',
        demo: 'https://www.fiverr.com/users/flutterbytech/',
        tags: ['client'],
    },
    {
        id: 'food-app',
        title: 'Food Delivery App',
        category: 'mobile',
        categoryLabel: '📱 Mobile App',
        emoji: '🍔',
        image: './images/projects/food_app.jpg',
        overview: 'A complete food delivery platform with separate customer and restaurant admin interfaces. Features real-time order tracking, Google Maps integration, and Stripe payment processing.',
        tech: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps SDK', 'Stripe', 'Socket.io'],
        features: [
            'Live GPS order tracking',
            'Restaurant dashboard',
            'Stripe payment gateway',
            'Multi-restaurant support',
            'Rating & review system',
            'Scheduled ordering',
        ],
        challenge: '⚠️ Challenge: Live location tracking without draining battery on driver devices. ✅ Solution: Implemented geofencing with adaptive polling intervals — frequent updates near delivery zone, reduced frequency elsewhere. Battery drain reduced by ~60%.',
        github: 'https://github.com/ArslanAhmad03/food_delivery_ui_kit.git',
        demo: 'https://www.fiverr.com/users/flutterbytech/',
        tags: ['client', 'mobile'],
    },
    {
        id: 'grocery-app',
        title: 'Grocery Delivery App',
        category: 'mobile',
        categoryLabel: '📱 Mobile App',
        emoji: '🛒',
        image: './images/projects/grocery_app.png',
        overview: 'A feature-rich grocery shopping app with over 500+ products across categories, real-time stock updates, and same-day delivery scheduling. Successfully launched on Google Play Store.',
        tech: ['Flutter', 'Firebase', 'BLoC', 'Hive', 'FCM', 'Razorpay'],
        features: [
            '500+ product catalog',
            'Smart search & filters',
            'Scheduled delivery slots',
            'Offline cart with Hive',
            'Promo & coupon system',
            'Play Store published',
        ],
        challenge: '⚠️ Challenge: Search performance with 500+ products and offline capability. ✅ Solution: Implemented local Hive caching with intelligent sync strategies and debounced search with Firestore composite indexes, achieving sub-100ms search response.',
        github: 'https://github.com/ArslanAhmad03/grocery_app.git',
        demo: 'https://www.fiverr.com/users/flutterbytech/',
        tags: ['client', 'mobile'],
    },
    {
        id: 'homecare-app',
        title: 'HomeCare Service App',
        category: 'mobile',
        categoryLabel: '📱 Mobile App',
        emoji: '🏠',
        image: './images/projects/home_care.png',
        overview: 'An on-demand home services platform connecting customers with verified service providers (plumbers, electricians, cleaners). Features provider onboarding, booking management, and in-app chat.',
        tech: ['Flutter', 'Firebase', 'GetX', 'Firestore', 'FCM', 'Agora'],
        features: [
            'Provider verification flow',
            'Real-time booking system',
            'In-app video/chat',
            'Review & rating module',
            'Live provider tracking',
            'Admin analytics panel',
        ],
        challenge: '⚠️ Challenge: Real-time provider availability across multiple cities without expensive polling. ✅ Solution: Used Firestore snapshot listeners with presence system, reducing server reads by 70% compared to polling.',
        github: 'hthttps://github.com/ArslanAhmad03/HomeCare.git',
        demo: 'https://www.fiverr.com/users/flutterbytech/',
        tags: ['client', 'mobile'],
    },
        {
        id: 'Web-app',
        title: 'Rapid Keys Web',
        category: 'web',
        categoryLabel: '� Web App',
        emoji: '🌐',
        image: './images/projects/rapid-keys.jpg',
        overview: 'Rapid Keys is a web-based tool designed to quickly generate number pairs, alphabet passwords, pattern numbers, and extract credentials from raw text files. It provides a user-friendly interface for efficient data generation and extraction.',
        tech: ['Html', 'CSS', 'JavaScript'],
        features: [
                'Number pair generator',
                'Alphabet password generator',
                'Pattern number generator',
                'Credential extraction from text files',
        ],
        challenge: '⚠️ Challenge: Implementing efficient algorithms for generating complex patterns and extracting credentials from large text files without causing browser performance issues. ✅ Solution: Utilized optimized data structures and asynchronous processing to handle large datasets, ensuring a smooth user experience even with intensive operations.',
        github: 'https://github.com/ArslanAhmad03',
        demo: 'https://www.fiverr.com/users/flutterbytech/',
        tags: ['client', 'web'],
    },
];

/* ---- DOM QUERIES ---- */
const header = document.getElementById('header');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('navOverlay');
const backToTop = document.getElementById('backToTop');
const portfolioGrid = document.getElementById('portfolioGrid');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

/* ====================================================
   1. THEME TOGGLE
   ==================================================== */
(function initTheme() {
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
})();

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon';
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    updateThemeIcon(next);
});

/* ====================================================
   2. HEADER SCROLL BEHAVIOR
   ==================================================== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ====================================================
   3. MOBILE NAV
   ==================================================== */
function openNav() {
    nav.classList.add('open');
    navOverlay.classList.add('visible');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    nav.classList.remove('open');
    navOverlay.classList.remove('visible');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    nav.classList.contains('open') ? closeNav() : openNav();
});

navOverlay.addEventListener('click', closeNav);

// Close nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
});

// Keyboard accessibility
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeNav();
        if (projectModal.classList.contains('open')) closeModal();
    }
});

/* ====================================================
   4. ACTIVE NAV LINK ON SCROLL
   ==================================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => navObserver.observe(section));

/* ====================================================
   5. SCROLL REVEAL (INTERSECTION OBSERVER)
   ==================================================== */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger siblings
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            siblings.forEach((el, idx) => {
                setTimeout(() => el.classList.add('visible'), idx * 70);
            });
            revealObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.05 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ====================================================
   6. TYPEWRITER EFFECT
   ==================================================== */
const roles = [
    'Flutter Developer',
    'Mobile App Architect',
    'Full-Stack Developer',
    'Firebase Expert',
    'UI/UX Enthusiast',
    'Problem Solver',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function typeWriter() {
    const current = roles[roleIndex];
    const speed = isDeleting ? 55 : 110;

    typeEl.textContent = isDeleting
        ? current.substring(0, charIndex--)
        : current.substring(0, charIndex++);

    if (!isDeleting && charIndex === current.length + 1) {
        setTimeout(() => { isDeleting = true; typeWriter(); }, 1800);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeWriter, speed);
}

typeWriter();

/* ====================================================
   7. ANIMATED COUNTER
   ==================================================== */
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
    }, 16);
}

const counters = document.querySelectorAll('.stat-number');
let countersStarted = false;

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            counters.forEach(animateCounter);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

/* ====================================================
   8. SKILLS TABS
   ==================================================== */
const skillTabs = document.querySelectorAll('.skill-tab');
const skillPanels = document.querySelectorAll('.skills-panel');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        skillTabs.forEach(t => t.classList.remove('active'));
        skillPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`panel-${target}`).classList.add('active');
    });
});

/* ====================================================
   9. PORTFOLIO — RENDER + FILTER
   ==================================================== */
function renderProjects(filter = 'all') {
    portfolioGrid.innerHTML = '';
    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.tags.includes(filter));

    filtered.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.setAttribute('data-id', project.id);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${project.title} details`);

        const techPills = project.tech.slice(0, 4)
            .map(t => `<span class="tech-pill">${t}</span>`)
            .join('');

        const thumbContent = project.image
            ? `<img src="${project.image}" alt="${project.title}" loading="lazy" />`
            : `<div class="project-thumb-placeholder">${project.emoji}</div>`;

        card.innerHTML = `
            <div class="project-thumb">
                ${thumbContent}
                <div class="project-overlay">
                    <span class="overlay-btn"><i class='bx bx-expand'></i> View Details</span>
                </div>
            </div>
            <div class="project-info">
                <span class="project-category-tag">${project.categoryLabel}</span>
                <h3>${project.title}</h3>
                <p>${project.overview}</p>
                <div class="project-tech-stack">${techPills}</div>
            </div>
        `;

        card.addEventListener('click', () => openModal(project));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') openModal(project);
        });

        portfolioGrid.appendChild(card);
    });

    // Trigger reveal for newly added cards
    portfolioGrid.querySelectorAll('.reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 80);
    });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.getAttribute('data-filter'));
    });
});

// Initial render
renderProjects('all');

/* ====================================================
   10. PROJECT MODAL
   ==================================================== */
function openModal(project) {
    const techBadges = project.tech
        .map(t => `<span class="tech-pill">${t}</span>`)
        .join('');

    const featureItems = project.features
        .map(f => `<li>${f}</li>`)
        .join('');

    const thumbHTML = project.image
        ? `<img src="${project.image}" alt="${project.title}" class="modal-img" />`
        : `<div class="modal-img-placeholder">${project.emoji}</div>`;

    const githubLink = project.github
        ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn-primary">
               <i class='bx bxl-github'></i> GitHub
           </a>`
        : '';

    const demoLink = project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn-outline">
               <i class='bx bx-link-external'></i> Live Demo / Fiverr / Play Store
           </a>`
        : '';

    modalContent.innerHTML = `
        ${thumbHTML}
        <div class="modal-header">
            <span class="modal-cat-tag">${project.categoryLabel}</span>
            <h2 class="modal-title" id="modal-project-title">${project.title}</h2>
            <p class="modal-desc">${project.overview}</p>
        </div>
        <div class="modal-section-title">TECH STACK</div>
        <div class="modal-tech-list">${techBadges}</div>
        <div class="modal-section-title">KEY FEATURES</div>
        <ul class="modal-features-list">${featureItems}</ul>
        <div class="modal-section-title">CHALLENGES & SOLUTIONS</div>
        <div class="modal-challenge">${project.challenge}</div>
        <div class="modal-links">
            ${githubLink}
            ${demoLink}
        </div>
    `;

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
projectModal.addEventListener('click', e => {
    if (e.target === projectModal) closeModal();
});

/* ====================================================
   11. SMOOTH SCROLL FOR ALL ANCHOR LINKS
   ==================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const id = link.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});
