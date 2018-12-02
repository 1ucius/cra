importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

// if (workbox) {
//     console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//     console.log(`Boo! Workbox didn't load 😬`);
// }

// workbox.setConfig({debug: false});

// workbox.precaching.precache([
//     /\.(?:js|css|html|img|svg)$/
// ]);

workbox.routing.registerRoute(
    'https://tools.planetradio.co.uk/core/podcasts/rss.php?name=radio-1-norge',
    workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
    /\.(?:js|css|html|img|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'static-resources'
    })
)

workbox.routing.registerRoute(
    new RegExp('^https://assets.planetradio.co.uk/audio-on-demand/radio-1-norge/'),
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        })
      ]
    })
  );

workbox.routing.registerRoute(
    'http://localhost:3000',
    workbox.strategies.cacheFirst()
)