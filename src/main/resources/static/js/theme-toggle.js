(function () {
  const storageKey = "theme";
  const className = "dark";

  function applyThemeFromStorage() {
    const saved = localStorage.getItem(storageKey);
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved ? saved === "dark" : prefersDark;
    if (useDark) document.documentElement.classList.add(className);
  }

  function updateToggleButton(btn) {
    if (!btn) return;
    const isDark = document.documentElement.classList.contains(className);
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.textContent = isDark ? "Light" : "Dark";
  }

  function toggleTheme(evt) {
    const btn =
      evt && evt.currentTarget
        ? evt.currentTarget
        : document.getElementById("theme-toggle");
    const isNowDark = document.documentElement.classList.toggle(className);
    localStorage.setItem(storageKey, isNowDark ? "dark" : "light");
    updateToggleButton(btn);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyThemeFromStorage();
    const btn = document.getElementById("theme-toggle");
    updateToggleButton(btn);
    if (btn) btn.addEventListener("click", toggleTheme);
  });
})();
