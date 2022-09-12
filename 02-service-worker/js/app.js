
// Comprobar si podemos usar el service worker
if( navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}