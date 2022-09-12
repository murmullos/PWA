
// Aquí se indican los eventos del service worker, no contendrá código
// Usamos 'self' para referinos al mismo sw

self.addEventListener('fetch',  event => {
    if(event.request.url.includes('style.css')) {
        event.respondWith( null );
    } else {
        event.respondWith( fetch(event.request));
    }
});