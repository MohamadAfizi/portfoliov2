// Tab functionality
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active-tab');
    });

    // Show selected tab content
    document.getElementById(tabId).classList.remove('hidden');

    // Add active class to clicked tab button
    event.currentTarget.classList.add('active-tab');
}

// Project inner tab functionality
function showProjectTab(projectId, event) {
    // Hide all project inner tabs
    document.querySelectorAll('.project-inner-tab').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Remove active class from all inner tab buttons
    document.querySelectorAll('.inner-tab-btn').forEach(btn => {
        btn.classList.remove('active-inner-tab');
    });

    // Show selected project inner tab
    document.getElementById(projectId).classList.remove('hidden');

    // Add active class to clicked inner tab button
    event.currentTarget.classList.add('active-inner-tab');
}

// Highlight inner tab functionality
function showHighlightTab(highlightId, event) {
    // Hide all highlight inner tabs
    document.querySelectorAll('.highlight-inner-tab').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Remove active class from all inner tab buttons
    document.querySelectorAll('.inner-tab-btn').forEach(btn => {
        btn.classList.remove('active-inner-tab');
    });

    // Show selected highlight inner tab
    document.getElementById(highlightId).classList.remove('hidden');

    // Add active class to clicked inner tab button
    event.currentTarget.classList.add('active-inner-tab');
}

// Milestone inner tab functionality
function showMilestoneTab(milestoneId, event) {
    // Hide all milestone inner tabs
    document.querySelectorAll('.milestone-inner-tab').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Remove active class from all inner tab buttons
    document.querySelectorAll('.inner-tab-btn').forEach(btn => {
        btn.classList.remove('active-inner-tab');
    });

    // Show selected milestone inner tab
    document.getElementById(milestoneId).classList.remove('hidden');

    // Add active class to clicked inner tab button
    event.currentTarget.classList.add('active-inner-tab');
}

// Modal functionality
function openModal(title, content) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('readMoreModal').classList.remove('hidden');
}

// Fetch HTML and open modal with its content
async function openModalFromHtml(htmlPath, title) {
    const modalTitleEl = document.getElementById('modalTitle');
    const modalContentEl = document.getElementById('modalContent');
    const modalEl = document.getElementById('readMoreModal');

    try {
        console.log('Fetching modal HTML from:', htmlPath);
        const resp = await fetch(htmlPath);
        if (!resp.ok) throw new Error('Network response was not ok: ' + resp.status);
        let html = await resp.text();

        // Basic sanitization: remove any <script> tags
        html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');

        modalTitleEl.textContent = title || modalTitleEl.textContent || '';
        modalContentEl.innerHTML = html;
        modalEl.classList.remove('hidden');
    } catch (err) {
        console.error('Failed to load modal HTML:', err);
        modalTitleEl.textContent = 'Details';
        modalContentEl.innerHTML = '<p class="text-red-400">Could not load details. Please try again later.</p>';
        modalEl.classList.remove('hidden');
    }
}

// Fetch JSON and open modal with its content
async function openModalFromJson(jsonPath, key) {
    // Try multiple path variants to handle leading slash vs relative path issues
    const candidates = [jsonPath];
    if (jsonPath.startsWith('/')) candidates.push(jsonPath.slice(1));
    const cleaned = jsonPath.replace(/^\/+/, '');
    if (!cleaned.startsWith('./')) candidates.push('./' + cleaned);

    let lastErr = null;
    for (const path of candidates) {
        try {
            console.log('Attempting to fetch modal JSON from:', path);
            const res = await fetch(path);
            if (!res.ok) {
                lastErr = new Error('HTTP ' + res.status + ' for ' + path);
                console.warn('Fetch returned non-OK for', path, res.status);
                continue;
            }
            const data = await res.json();
            console.log('Loaded JSON:', data);

            let entry = null;
            if (key && Object.prototype.hasOwnProperty.call(data, key)) {
                entry = data[key];
            } else if (data.title || data.content || data.modalContent) {
                entry = data;
            } else {
                const keys = Object.keys(data);
                if (keys.length > 0) entry = data[keys[0]];
            }

            if (!entry) {
                lastErr = new Error('No matching entry for key "' + key + '"');
                console.warn(lastErr.message, data);
                continue;
            }

            const title = entry.modalTitle || entry.title || 'Details';
            let content = entry.modalContent || entry.content || '';
            content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
            openModal(title, content);
            return;
        } catch (err) {
            lastErr = err;
            console.warn('Failed to fetch/parse JSON from', path, err);
        }
    }

    console.error('Failed to load modal JSON after trying paths:', candidates, lastErr);
    openModal('Error', '<p class="text-red-400">Failed to load details. Check the browser console for errors (404/CORS/file protocol).</p>');
}

// Close modal
document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('readMoreModal').classList.add('hidden');
};

// Optional: Close modal when clicking outside modal content
document.getElementById('readMoreModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('hidden');
    }
});

// Accordion functionality
function toggleAccordion(accordionId) {
    const accordion = document.getElementById(accordionId);
    accordion.classList.toggle('active');
}

// Dynamic image fade for cards
document.querySelectorAll('.image-container').forEach(container => {
    const images = container.querySelectorAll('img');
    const numImages = images.length;
    const totalDuration = 9; // seconds for full loop

    if (numImages === 1) {
        images[0].style.opacity = 1; // Only one image → always visible
        return;
    }

    images.forEach((img, index) => {
        const delay = (totalDuration / numImages) * index;
        const duration = totalDuration;

        img.style.animation = `fade ${duration}s infinite`;
        img.style.animationDelay = `${delay}s`;
    });

    // Create dynamic keyframes
    const styleEl = document.createElement('style');
    let keyframes = `@keyframes fade {`;

    for (let i = 0; i <= numImages; i++) {
        const percent = (i / numImages) * 100;
        keyframes += `${percent}% { opacity: ${i === 0 || i === numImages ? 0 : 1}; }`;
    }

    keyframes += `}`;
    styleEl.innerHTML = keyframes;
    document.head.appendChild(styleEl);
});

// Initialize first tab as active and set all tabs to original mode
document.addEventListener('DOMContentLoaded', function() {
    showTab('profile');

    // Set all tabs to original (centered) mode on load
    const contentWrapper = document.getElementById('contentWrapper');
    const tabContainers = document.querySelectorAll('.tab-content:not(#profile)');

    // Profile tab is already centered via contentWrapper
    // Center other tabs
    tabContainers.forEach(container => {
        container.classList.add('max-w-4xl', 'mx-auto', 'px-4');
    });
});

// Sequential fade-in for skill items
document.addEventListener('DOMContentLoaded', function() {
    const badges = document.querySelectorAll('#profile .skill-item');
    badges.forEach((badge, i) => {
        setTimeout(() => {
            badge.classList.add('visible');
        }, 100 * i);
    });
});

// Vanta.js initialization
document.addEventListener('DOMContentLoaded', function() {
    if (typeof VANTA !== 'undefined') {
        VANTA.WAVES({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 300.00,
            minWidth: 300.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            shininess: 7.00,
            waveHeight: 9.50,
            waveSpeed: 1.50,
            zoom: 0.65
        });
    }
});

// Layout toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('layoutToggle');
    if (!toggle) return;

    const contentWrapper = document.getElementById('contentWrapper');
    const tabContainers = document.querySelectorAll('.tab-content:not(#profile)');
    const dot = document.querySelector('.dot');

    toggle.addEventListener('change', () => {
        if (toggle.checked) { // "Fit to Screen" mode
            // Handle the wrapper (for Profile tab)
            if (contentWrapper) {
                contentWrapper.classList.remove('max-w-4xl', 'mx-auto', 'px-4');
                contentWrapper.classList.add('w-full');
            }
            // Handle other tabs
            tabContainers.forEach(container => {
                container.classList.remove('max-w-4xl', 'mx-auto', 'px-4');
                container.classList.add('w-full');
            });
            if (dot) {
                dot.style.transform = 'translateX(24px)';
                dot.style.backgroundColor = '#4ade80';
            }
        } else { // "Original" mode
            // Handle the wrapper (for Profile tab)
            if (contentWrapper) {
                contentWrapper.classList.add('max-w-4xl', 'mx-auto', 'px-4');
                contentWrapper.classList.remove('w-full');
            }
            // Handle other tabs
            tabContainers.forEach(container => {
                container.classList.add('max-w-4xl', 'mx-auto', 'px-4');
                container.classList.remove('w-full');
            });
            if (dot) {
                dot.style.transform = 'translateX(0)';
                dot.style.backgroundColor = '#fff';
            }
        }
    });
});
