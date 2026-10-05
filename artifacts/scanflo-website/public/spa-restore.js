// Restore the original clean URL before React/Wouter starts.
(function () {
  var params = new URLSearchParams(window.location.search);
  var route = params.get("__scanflo_path");
  if (!route || route.charAt(0) !== "/" || route.slice(0, 2) === "//") return;
  var target = new URL(route, window.location.origin);
  if (target.origin !== window.location.origin) return;
  window.history.replaceState(null, "", target.pathname + target.search + target.hash);
})();
