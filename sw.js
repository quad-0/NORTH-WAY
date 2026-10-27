// Simple offline support: the guide opens even with no signal.
var CACHE = "qlay3at-v72";
var FILES = ["./", "./index.html", "./manifest.webmanifest", "./privacy.html", "./fonts/ibm-plex-sans-arabic-v15-arabic_latin-500.woff2", "./fonts/ibm-plex-sans-arabic-v15-arabic_latin-600.woff2", "./fonts/ibm-plex-sans-arabic-v15-arabic_latin-regular.woff2", "./fonts/ibm-plex-sans-v23-latin_latin-ext-500.woff2", "./fonts/ibm-plex-sans-v23-latin_latin-ext-600.woff2", "./fonts/ibm-plex-sans-v23-latin_latin-ext-regular.woff2", "./fonts/outfit-v15-latin-600.woff2", "./fonts/outfit-v15-latin-700.woff2", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

// Network first, so updates show up when online. Falls back to the saved copy.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return res;
      })
      .catch(function () {
        return caches.match(e.request).then(function (hit) { return hit || caches.match("./index.html"); });
      })
  );
});
