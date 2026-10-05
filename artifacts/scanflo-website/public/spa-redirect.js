// GitHub Pages has no SPA rewrite rule. Its 404 page redirects through the root.
(function () {
  var route = window.location.pathname + window.location.search + window.location.hash;
  // Do not loop if the root itself is unavailable during a deployment.
  if (window.location.pathname !== "/") {
    window.location.replace("/?__scanflo_path=" + encodeURIComponent(route));
  }
})();
