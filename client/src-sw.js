const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

// Set up page cache
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

const requestedDestination = "/style/path"; // Assuming this is the requested destination
const paths = ["style", "script", "worker"];

if (paths.some(path => requestedDestination.includes(path))) {
    // Register the route
    console.log("Route registered for the requested destination.");
} else {
    console.log("Requested destination does not match the allowed paths.");
}
new workbox.strategies.StaleWhileRevalidate();

registerRoute( ({ request }) => variableForArrayHere.ARRAY_METHOD_HERE(variableForDestinationHere),
  new CLASSNAME_TO_INSTANTIATE_HERE({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
