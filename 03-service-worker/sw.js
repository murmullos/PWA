// Ciclo de vida del SW
/** Eventos:
 * 1.DESCARGAR
 * 2.INSTALAR --> En este evento ya podemos realizar acciones
 * 3.ACTIVAR
 * */

/** INSTALAR
 * Este evento se va a disparar cada vez que hagamos un cambio en el ServiceWorker
 * No significa que se vaya a activar inmediatamente, simplemente se "prepara"
 * Se utiliza para:
 *  1. Descargar assets
 *  2. Crear cache
 * **/
self.addEventListener('install', event => {

    console.log('SW: 1. Installing SW', event);

    /** A veces vamos a tener dependencias entre uno evento y otro
     * Con el método event.waitUntil(<Promise>); inciamos que debemos esperar antes de saltar
     * al siguiente evento.
     */

    let promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            self.skipWaiting();
            console.log('SW: 2. Installing resources');
            console.log('SW: 3. End of install');
            resolve();
        }, 1000);
    });

    event.waitUntil(promise);
    /** Con este método conseguimos que el evento de activate espere a que termine el evento de instalación
     *  IMPORTANTE : Solo con fines académicos, se deja el método self.skipWating()
     *  Este método se utiliza para que si hay un nuevo sw (Porque se ha modificado),
     *  pise al viejo sin esperar a que se abra una nueva pestaña
     *  No es recomentable su uso puesto que elimina el sw anterior y su cache
     */
});


/** ACTIVAR - SW toma el control de la app
 * Cuando entramos en este evento significa que el viejo service worker desapareció y que el nuevo está.
 * Se utiliza para:
 *  1. Borrar Cache vieja
 * **/
self.addEventListener('activate', event => {
    console.log('SW: 4. Active and ready to control app')
})

/** FETCH: Manejo de peticiones HTTP
 * Metemos ejemplo de llamada api en el app.js
 **/
self.addEventListener('fetch', event => {
    /** Aplicamos estratégias de cache:
     * ¿Vale o no la pena guardar en cache?
     * Ejemplo de interceptar info de una llamada al back y modificarla -->
     * */
    if (event.request.url.includes('https://reqres.in/')) {
        let response = new Response('{"body":{"data": "Prueba de captura de datos por sw y retornar lo que quiera"}}',
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        event.respondWith(response);
    }
    console.log('SW: Fetch', event.request.url);
})

/** SYNC: Cuando recuperamos la conexión a internet *
 *  Este evento contiene la prop tag que es el nombre que tiene la llamada que no se pudo realizar
 *  Para Poder probar este ejemplo, debemos hacer una llamada en offline --> app.js
 */
self.addEventListener('sync', event => {
    console.log('SW - SYNC: We recovered conection');
    console.log(event);
    console.log(event.tag);
})

/** PUSH: Manejar las push notifications
 *
 */
self.addEventListener('push', event => {
    /** En este evento podemos mandar mucha información:
     *  Hasta el modo de vibración del tlf
     *
     *  IMPORTANTE: Es conveniente preguntar al usuario si quiere que le envíen notificaciones
     *  VER -> app.js
     * */
    console.log('SW - PUSH', event);

})
