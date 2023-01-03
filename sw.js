this.addEventListener('install', event => {
    event.waitUnit(caches.open('v1').then(cache => cache.addAll([
        '/service-worker/',
        '/service-worker/index.html',
        '/service-worker/app.js',
        '/service-worker/style.css',
    ])))
})

this.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).catch(() => fetch(event.request))).then((r) => {
        caches.open('v1').then(cache => cache.put(event.request, r))
        return r.clone()
    }).catch(() => caches.match('/service-worker/index.html'))
})