const CACHE_NAME = 'shrinkvideo-pwa-v1';

const PRECACHE_URLS = [
  '/',
  '/es/',
  '/pt/',
  '/de/',
  '/fr/',
  '/ja/',
  '/zh/',
  '/ru/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/og-image.svg',
];

const FFMPEG_CORE_ASSETS = [
  'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.js',
  'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.wasm',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(PRECACHE_URLS).catch(() => {});
      // Pre-cache FFmpeg WebAssembly core assets in the background for offline compression
      for (const url of FFMPEG_CORE_ASSETS) {
        try {
          const res = await fetch(url, { mode: 'cors' });
          if (res.ok) {
            await cache.put(url, res);
          }
        } catch (_) {}
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip analytics requests
  if (
    url.hostname.includes('googletagmanager.com') ||
    url.hostname.includes('google-analytics.com')
  ) {
    return;
  }

  // Offline-first cache strategy for same-origin HTML/CSS/JS & FFmpeg WebAssembly assets
  if (
    url.origin === self.location.origin ||
    url.href.includes('@ffmpeg/core')
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const networkFetch = fetch(request)
          .then((networkResponse) => {
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              (networkResponse.type === 'basic' || networkResponse.type === 'cors')
            ) {
              const cloned = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || networkFetch;
      })
    );
  }
});
