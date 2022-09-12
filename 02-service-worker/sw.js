
// Aquí se indican los eventos del service worker, no contendrá código
// Usamos 'self' para referinos al mismo sw

// Este evento captura todas las peticiones http que realiza la app entre bastidores
self.addEventListener('fetch',  event => {

    // 1. Ejemplo de control de la request de un fetch

    // if(event.request.url.includes('style.css')) {
    //     event.respondWith( null );
    // } else {
    //     // Usamos responseWith para que SW se encargue de controlar la request
    //     event.respondWith( fetch(event.request));
    // }

    // 2. Ejemplo de control de distintos tipos de fetch request

    // if (event.request.url.includes('.jpg')) {
    //     // Estos tres casos son válidos para realizar el fetch de la imagen.
    //     let fotoReq = fetch('img/main.jpg');
    //     let fotoReq = fetch( event.request.url);
    //     let fotoReq = fetch( event.request );
    //
    //     event.respondWith( fotoReq );
    // }

    // // 3. Ejemplo interceptar petición css y retornar una response personalizada
    // // Usamos new Response()  (Es el resultado de cualquier petición fetch)
    //
    //     let  response = new Response(`body:{
    //         background-color: red !important;
    //         color : pink;
    //     }`,
    //     {
    //         headers: {
    //             'Content-Type': 'text/css'
    //         }
    //     });
    //
    //     event.respondWith(response);

    // EJERCICIO Devolver en vez de la imagen main, la imagen main-patas-arriba.jpg

    // if (event.request.url.includes('main.jpg')) {
    //
    //     let newImage = fetch('/img/main-patas-arriba.jpg');
    //
    //     event.respondWith(newImage);
    // }

    // 4. Retornar alternativa

      const res = fetch(event.request)
                            .then((response) => {
                                return response.ok ? response : fetch('img/main.jpg');
                            });
      event.respondWith(res);

});
