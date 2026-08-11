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
