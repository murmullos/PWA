###
PWA - POC

``` javascript
npm install http-server -g // Install internarl http-server protocol

http-server // Run server
```

### Service Worker
Un service worker no es más que un proxy que intercepta todas las llamadas que se realicen 
en tu página web. Por eso es capaz de realizar cambios a traves de una lógica propia
Este service workes es tan potente que debe ser https para garantizar su seguridad. 

Es un archivo de js que está pendiente de sucesos

Service worker corre en su propio hilo independientemente de si está conectado a la web. 
Por ello funcionan las notificaciones push. 
El SW se quedará escuchando hasta el fin de los tiempos siempre y cuando no instales uno nuevo
o fuerces su apagado

No todos los navegadores pueden usar service-workes. Podemos comprobar la compatibilidad en la página
https://caniuse.com/?search=service%20worker

Habitualmente el serviceWorker se coloca en la raiz del proyecto, a la altura del index.html
Esto es porque queremos tener control total de la app y no solo de la carpeta en donde se encuentra. 
