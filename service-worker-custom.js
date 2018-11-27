var doCache = false; //true for prod

var CACHE_NAME = 'my-pwa-cache-v1';

var urlsToCache = [
  '/manifest.json',
  '/static/css/main.e3b0434b.chunk.css',
  '/static/js/1.f29157c7.chunk.js',
  '/static/js/main.2ecfbce2.chunk.js',
  '/static/js/main.2ecfbce2.chunk.js',
  '/static/media/pause.07100aab.svg',
  '/static/media/logo.02d30e17.svg',
  '/static/media/play.5004d330.svg',
  '/static/media/play.5004d330.svg'
];


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened and caching files');
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