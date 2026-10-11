/**
 * ============================================================================
 * ANURAG.DEV - CORE APPLICATION CONTROLLER
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not loaded.');
    return;
  }

  // Helper: Icon SVG Map for zero-dependency crisp rendering
  const iconMap = {
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y1="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    layout: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    palette: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path></svg>`,
    "file-code": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 13-2 2 2 2"></path><path d="m14 17 2-2-2-2"></path></svg>`,
    "git-branch": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    monitor: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    layers: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    zap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    command: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    brain: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`,
    graduation: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    book: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
  };

  // 1. Toast Notification Utility
  const toastContainer = document.getElementById('toastContainer');
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color: var(--accent-cyan); font-weight: bold;">✦</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    if (window.EffectsModule) window.EffectsModule.playHapticTone('success');

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // 2. Render Skills & Category Filter
  function renderSkills(filter = 'all') {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    const filteredSkills =
      filter === 'all'
        ? data.skills
        : data.skills.filter((s) => s.category === filter);

    skillsGrid.innerHTML = filteredSkills
      .map((skill, index) => {
        const iconSvg = iconMap[skill.icon] || iconMap.code;
        return `
          <div class="skill-card glass-card reveal active">
            <div class="skill-card-top">
              <div class="skill-icon-box" aria-hidden="true">
                ${iconSvg}
              </div>
              <span class="skill-status-pill status-active-pill">
                <span class="section-tag-dot" style="width:5px;height:5px;"></span>
                ${skill.status}
              </span>
            </div>
            <div class="skill-card-body">
              <h3>${skill.name}</h3>
              <p>${skill.description}</p>
            </div>
            <div class="skill-tags-group">
              ${skill.concepts.map((c) => `<span class="skill-micro-tag">${c}</span>`).join('')}
            </div>
          </div>
        `;
      })
      .join('');
  }

  function initSkillFilters() {
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-filter');
        renderSkills(category);
        if (window.EffectsModule) window.EffectsModule.playHapticTone('click');
      });
    });
  }

  // 3. Render Project Roadmap (Within Empty State)
  function renderProjectRoadmap() {
    const roadmapGrid = document.getElementById('projectRoadmapGrid');
    if (!roadmapGrid) return;

    roadmapGrid.innerHTML = data.projectsStatus.upcomingRoadmap
      .map(
        (plan) => `
        <div class="blueprint-preview-card">
          <div class="blueprint-number">PLAN #${plan.step} • ${plan.tech}</div>
          <h4>${plan.title}</h4>
          <p>${plan.desc}</p>
        </div>
      `
      )
      .join('');
  }

  // 4. Render Currently Exploring (Learning Journey)
  function renderExploring() {
    const exploringGrid = document.getElementById('exploringGrid');
    if (!exploringGrid) return;

    exploringGrid.innerHTML = data.learningJourney
      .map((item, index) => {
        const iconSvg = iconMap[item.icon] || iconMap.code;
        return `
          <div class="exploring-card glass-card reveal active">
            <div class="exploring-header">
              <div class="exploring-icon-box" aria-hidden="true">
                ${iconSvg}
              </div>
              <span class="exploring-badge">INTEREST PATH</span>
            </div>
            <div class="exploring-body">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
            <div class="exploring-progress-box">
              <div class="progress-label-row">
                <span>Focus: ${item.focus}</span>
                <span>${item.progressPercent}% Active</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width: ${item.progressPercent}%;"></div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // 5. Navigation, Header & Scroll Spy
  const header = document.querySelector('.site-header');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / (docHeight || 1)) * 100;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    let currentSectionId = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile Drawer Toggle
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 6. Progressive Scroll Reveal Animation
  function initScrollReveal() {
    document.body.classList.add('js-reveal-ready');
    const revealElements = document.querySelectorAll('.reveal');

    // Immediately activate elements that are already within visible screen range
    function checkVisibility() {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.92) {
          el.classList.add('active');
        }
      });
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
  }

  // 7. Copy to Clipboard Utility
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard
        .writeText(data.contact.email)
        .then(() => {
          showToast(`Copied ${data.contact.email} to clipboard!`);
        })
        .catch(() => {
          showToast(`Email: ${data.contact.email}`);
        });
    });
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('senderSubject').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting Message...</span>`;

      setTimeout(() => {
        showToast(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 700);
    });
  }

  // 9. Modals (Suggest Idea)
  const ideaModal = document.getElementById('ideaModal');
  const openIdeaBtn = document.getElementById('openIdeaBtn');
  const closeIdeaBtn = document.getElementById('closeIdeaBtn');
  const ideaForm = document.getElementById('ideaForm');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openIdeaBtn) openIdeaBtn.addEventListener('click', () => openModal(ideaModal));
  if (closeIdeaBtn) closeIdeaBtn.addEventListener('click', () => closeModal(ideaModal));
  if (ideaModal) {
    ideaModal.addEventListener('click', (e) => {
      if (e.target === ideaModal) closeModal(ideaModal);
    });
  }

  if (ideaForm) {
    ideaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('projectIdeaInput').value.trim();
      if (input) {
        showToast('Project idea submitted! Thank you for the inspiration.');
        ideaForm.reset();
        closeModal(ideaModal);
      }
    });
  }

  // 10. Theme Accent Switcher (Cycles: Cyan -> Purple -> Emerald)
  const themeAccentBtn = document.getElementById('themeAccentBtn');
  const accents = ['cyan', 'purple', 'emerald'];
  let currentAccentIdx = 0;

  if (themeAccentBtn) {
    themeAccentBtn.addEventListener('click', () => {
      currentAccentIdx = (currentAccentIdx + 1) % accents.length;
      const nextAccent = accents[currentAccentIdx];
      document.documentElement.setAttribute('data-theme-accent', nextAccent);
      showToast(`Switched accent theme to ${nextAccent.toUpperCase()}`);
      if (window.EffectsModule) window.EffectsModule.playHapticTone('click');
    });
  }

  // 11. Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Escape key closes modals and drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeModal(ideaModal);
    }
  });

  // Dynamic initialization
  renderSkills('all');
  initSkillFilters();
  renderProjectRoadmap();
  renderExploring();
  handleScroll();
  initScrollReveal();

  if (window.EffectsModule) {
    window.EffectsModule.initParticleCanvas();
    window.EffectsModule.initCodeTerminal();
  }
});
