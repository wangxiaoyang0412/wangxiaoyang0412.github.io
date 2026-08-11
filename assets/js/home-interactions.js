(function () {
  "use strict";

  var controls = document.querySelectorAll("[data-publication-target]");

  if (!controls.length) {
    return;
  }

  controls.forEach(function (control) {
    control.addEventListener("click", function () {
      var targetId = control.getAttribute("data-publication-target");

      controls.forEach(function (candidate) {
        var isActive = candidate === control;
        var panelId = candidate.getAttribute("data-publication-target");
        var panel = document.getElementById(panelId);

        candidate.classList.toggle("is-active", isActive);
        candidate.setAttribute("aria-pressed", String(isActive));

        if (panel) {
          panel.hidden = panelId !== targetId;
        }
      });
    });
  });
})();

(function () {
  "use strict";

  var buttons = document.querySelectorAll("[data-bibtex-target]");

  if (!buttons.length || !navigator.clipboard) {
    return;
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var source = document.getElementById(button.getAttribute("data-bibtex-target"));

      if (!source) {
        return;
      }

      navigator.clipboard.writeText(source.textContent.trim()).then(function () {
        var label = button.querySelector("span") || button;
        var original = label.textContent;

        label.textContent = "Copied!";
        button.classList.add("is-copied");

        window.setTimeout(function () {
          label.textContent = original;
          button.classList.remove("is-copied");
        }, 1600);
      });
    });
  });
})();
