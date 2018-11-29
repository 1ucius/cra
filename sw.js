var doCache = false; //true for prod

var CACHE_NAME = 'my-pwa-cache-v1';

var urlsToCache = [
  './favicons/favicon.ico',
  './index.html',
  './sw.js',
  './manifest.json'
].concat(self.__precacheManifest || []);


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Open a cache and cache our files
        console.log('My custom service worker');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});


self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
  }
});