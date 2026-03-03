// Add vertical line indicator to nested sidebar groups
(function () {
  function applyStyles() {
    var style = document.getElementById("sidebar-lines-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "sidebar-lines-style";
      style.textContent =
        "#sidebar-group > li[data-title] > ul {" +
        "  margin-left: 1rem;" +
        "  padding-left: 0.75rem;" +
        "  border-left: 2px solid rgb(209 213 219);" +
        "}" +
        ".dark #sidebar-group > li[data-title] > ul {" +
        "  border-left-color: rgb(75 85 99);" +
        "}";
      document.head.appendChild(style);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyStyles);
  } else {
    applyStyles();
  }
  // Re-apply on SPA navigation
  var observer = new MutationObserver(applyStyles);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
