importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

// if (workbox) {
//     console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//     console.log(`Boo! Workbox didn't load 😬`);
// }

workbox.setConfig({debug: false});

// workbox.precaching.precache([
//     /\.(?:js|css|html|img|svg)$/
// ]);



// workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    /\.(?:js|css|html|img|svg|json)$/,
    workbox.strategies.networkFirst({
        cacheName: 'static-resources'
    })
)

workbox.routing.registerRoute(
    new RegExp('^https://tools.planetradio.co.uk/core/podcasts/rss.php'),
    workbox.strategies.cacheFirst({
        cacheName: 'appdata-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('^https://assets.planetradio.co.uk/audio-on-demand/radio-1-norge/'),
    workbox.strategies.cacheFirst({
        cacheName: 'images-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('^https://aod.planetradio.co.uk/radio-1-norge/'),
    workbox.strategies.cacheFirst({
        cacheName: 'podcasts-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60,
                maxEntries: 5
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.networkFirst()
); 

workbox.routing.registerRoute(
    //'/',
    'https://1ucius.github.io/cra/',
    workbox.strategies.cacheFirst()
)