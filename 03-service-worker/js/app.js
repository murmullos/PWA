// CICLOS DE VIDA //
// Si no se encuentra ningún service worker anterior, lo que va a ocurrir es:
/**
 * 1.DESCARGAR
 * 2.INSTALAR --> En este evento ya podemos realizar acciones
 * 3.ACTIVAR
 * */


// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg => {


            ////////// START - PROBAR SYNC ////////////////////////////
            // Cuando se haya registrado el service worker
            // Hacemos una llamada a los 3s y se lo indicamos al sync
            // Esta llamada no se hará, pero el sync al detectarla, se encargará de hacerla cuando haya conexión
            setTimeout(() => {
                // Indicamos al sw el nombre del tag que estamos creando/mandando
               reg.sync.register('posteo-gatitos');
               console.log('Enviando fotos de gatitos pensando que hay internet');
            }, 8000);
            ///////// END - PROBAR SYNC ///////////////////////////////////

            //////// START - PERMISOS NOTIFICACIONES /////////////////////
            // Necesitamos tener el objeto reg que viene el SW, por eso va en el then()
            // Esto devuelve el permisos dado por el usuario
            Notification.requestPermission((result) => {
                console.log('Permission',result);
                // Esto es solo un ejemplo,
                if (result === 'granted') {
                    reg.showNotification('Soy una notificación');
                }
            })
            //////// END - PERMISOS NOTIFICACIONES /////////////////////

        }));


}

// Esta petición, por pequeña que sea, debe ser interceptada por el event "fetch" del SW
fetch('https://reqres.in/api/users/2')
    .then( res => res.json())
    .then((response) => {
        console.log(response);
    });
