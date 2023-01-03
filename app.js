alert('ok')
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker/sw.js').then(function(reg) {
        console.log('service worker registered', reg)
    }).catch(function(err) {
        console.log('service worker registration failed', err)
    })
}
