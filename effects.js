/**
 * ============================================================================
 * ANURAG.DEV - VISUAL EFFECTS, CANVAS & INTERACTIVE TERMINAL
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. Ambient Particle Canvas Effect
  function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 65);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.hue = Math.random() > 0.6 ? 260 : 195; // Cyan or Purple
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 85%, 65%, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${this.hue}, 90%, 60%, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Connect close particles with subtle threads
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineOpacity = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    render();
  }

  // 2. Interactive Terminal Code Snippet Switcher
  const terminalSnippets = {
    'profile.json': `<span class="syntax-keyword">{</span>
  <span class="syntax-prop">"name"</span>: <span class="syntax-string">"Anurag Prasad Sah"</span>,
  <span class="syntax-prop">"title"</span>: <span class="syntax-string">"Aspiring Software Developer"</span>,
  <span class="syntax-prop">"university"</span>: <span class="syntax-string">"Shoolini University"</span>,
  <span class="syntax-prop">"degree"</span>: <span class="syntax-string">"B.Tech in Computer Science"</span>,
  <span class="syntax-prop">"year"</span>: <span class="syntax-string">"First Year (2024-2028)"</span>,
  <span class="syntax-prop">"status"</span>: <span class="syntax-string">"Building Solid Fundamentals"</span>,
  <span class="syntax-prop">"projectsCompleted"</span>: <span class="syntax-number">0</span>,
  <span class="syntax-prop">"curiosityLevel"</span>: <span class="syntax-string">"Infinity"</span>
<span class="syntax-keyword">}</span>`,

    'main.cpp': `<span class="syntax-comment">// First-Year CS Journey</span>
<span class="syntax-keyword">#include</span> <span class="syntax-string">&lt;iostream&gt;</span>
<span class="syntax-keyword">#include</span> <span class="syntax-string">&lt;string&gt;</span>

<span class="syntax-keyword">int</span> <span class="syntax-const">main</span>() {
    std::string student = <span class="syntax-string">"Anurag Prasad Sah"</span>;
    std::cout &lt;&lt; <span class="syntax-string">"Initializing Developer Path..."</span> &lt;&lt; std::endl;
    std::cout &lt;&lt; <span class="syntax-string">"Status: Learning Daily @ Shoolini Univ"</span> &lt;&lt; std::endl;
    <span class="syntax-keyword">return</span> <span class="syntax-number">0</span>;
}`,

    'status.sh': `<span class="syntax-comment">#!/usr/bin/env bash</span>
<span class="syntax-const">echo</span> <span class="syntax-string">"=== ANURAG.DEV WORKSPACE ==="</span>
<span class="syntax-const">echo</span> <span class="syntax-string">"Academic Year: Year 1 / B.Tech CSE"</span>
<span class="syntax-const">echo</span> <span class="syntax-string">"Current Focus: C/C++, Web Foundations, DSA"</span>
<span class="syntax-const">echo</span> <span class="syntax-string">"System State: Ready to Build 🚀"</span>
<span class="syntax-keyword">exit</span> <span class="syntax-number">0</span>`
  };

  function initCodeTerminal() {
    const codeBlock = document.getElementById('terminalCodeDisplay');
    const tabs = document.querySelectorAll('.terminal-tab-btn');
    if (!codeBlock || tabs.length === 0) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const filename = tab.getAttribute('data-file');
        if (terminalSnippets[filename]) {
          codeBlock.innerHTML = terminalSnippets[filename] + '<span class="terminal-cursor"></span>';
        }
      });
    });
  }

  // 3. Audio Synthesis for tactile feedback (Zero external files needed)
  let audioCtx = null;
  function playHapticTone(type = 'click') {
    try {
      if (!window.AudioContext && !window.webkitAudioContext) return;
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
      }
    } catch (e) {
      // Graceful fallback if audio is disabled
    }
  }

  // Expose to window
  window.EffectsModule = {
    initParticleCanvas,
    initCodeTerminal,
    playHapticTone
  };
})();
