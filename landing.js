const demo = document.querySelector(".demo");
const toggle = demo?.querySelector(".demo-toggle");

if (demo && toggle) {
  toggle.addEventListener("click", () => {
    const paused = demo.toggleAttribute("data-paused");
    toggle.textContent = paused ? toggle.dataset.play : toggle.dataset.pause;
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -12% 0px" },
);

document.querySelectorAll(".reveal, .fan-row").forEach((element) => revealObserver.observe(element));

const story = document.querySelector(".story-grid");

if (story) {
  const stepObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) story.dataset.active = entry.target.dataset.step;
      }
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  story.querySelectorAll(".story-step").forEach((step) => stepObserver.observe(step));
}

const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

if (navLinks.length) {
  const sections = navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of navLinks) {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle("is-current", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-50% 0px -50% 0px" },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}
