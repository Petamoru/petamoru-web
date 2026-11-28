(function () {
  var params = new URLSearchParams(location.search);
  new URLSearchParams(location.hash.slice(1)).forEach(function (value, key) { params.set(key, value); });

  var isEnglishPage = document.documentElement.lang === "en";
  var prefersSpanish = /^es\b/i.test((navigator.languages && navigator.languages[0]) || navigator.language || "");
  if (isEnglishPage && prefersSpanish && params.get("lang") !== "en") {
    location.replace("/es/email-confirmed" + location.search + location.hash);
    return;
  }

  if (params.has("error") || params.has("error_code")) {
    document.getElementById("confirmed").hidden = true;
    document.getElementById("link-failed").hidden = false;
  }

  if (location.search || location.hash) {
    history.replaceState(null, "", location.pathname);
  }
})();
