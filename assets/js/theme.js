(function () {
  "use strict";
  var root = document.documentElement;
  try {
    var savedTheme = localStorage.getItem("yutian-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      root.dataset.theme = savedTheme;
    }
  } catch (_) {
    // The system theme still works when storage is unavailable.
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;
    var system = window.matchMedia("(prefers-color-scheme: dark)");
    function isDark() {
      return root.dataset.theme ? root.dataset.theme === "dark" : system.matches;
    }
    function updateLabel() {
      button.textContent = isDark() ? "Light theme" : "Dark theme";
      button.setAttribute("aria-label", "Switch to " + (isDark() ? "light" : "dark") + " theme");
    }
    button.hidden = false;
    updateLabel();
    button.addEventListener("click", function () {
      root.dataset.theme = isDark() ? "light" : "dark";
      try { localStorage.setItem("yutian-theme", root.dataset.theme); } catch (_) {}
      updateLabel();
    });
    system.addEventListener("change", updateLabel);
  });
}());
