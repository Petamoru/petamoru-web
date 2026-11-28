const KEY = "color-scheme";
const meta = document.querySelector('meta[name="color-scheme"]');
const systemDark = matchMedia("(prefers-color-scheme: dark)");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const stored = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

const store = (value) => {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {}
};

const rendered = () => {
  const value = meta.content;
  if (value === "light" || value === "dark") return value;
  return systemDark.matches ? "dark" : "light";
};

const apply = (value) => {
  meta.content = value ?? "light dark";
};

const toggleTheme = (button) => {
  const target = rendered() === "dark" ? "light" : "dark";
  const system = systemDark.matches ? "dark" : "light";
  const value = target === system ? null : target;
  store(value);

  if (!document.startViewTransition || reducedMotion.matches) {
    apply(value);
    return;
  }

  const box = button.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.documentElement.classList.add("theme-switching");
  const transition = document.startViewTransition(() => apply(value));
  transition.finished.finally(() => document.documentElement.classList.remove("theme-switching"));
  transition.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 550, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  });
};

document.querySelectorAll(".theme-toggle").forEach((button) => {
  button.addEventListener("click", () => toggleTheme(button));
});

addEventListener("storage", (event) => {
  if (event.key === KEY || event.key === null) apply(stored());
});
