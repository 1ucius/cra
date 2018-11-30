importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// workbox.setConfig({debug: false});

workbox.precaching.precache([
    /\.(?:js|css|html|img|svg)$/
]);

workbox.routing.registerRoute(
    'https://tools.planetradio.co.uk/core/podcasts/rss.php?name=radio-1-norge',
    workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
    /\.(?:js|css|html|img|svg)$/,
    workbox.strategies.cacheFirst(),
)

workbox.routing.registerRoute(
    'http://localhost:3000',
    workbox.strategies.cacheFirst()
)