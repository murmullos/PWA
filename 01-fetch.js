// Fetch origins. XMLHttpRequest
// Este objeto no se encuentra en node si no en el objeto window de los navegadores web.
// Para poder utilizarlo debemos estar conectados a una web html.

let request = new XMLHttpRequest();

console.log('Working');

request.open('GET', 'https://reqres.in/api/users', true);

// send se utiliza para enviar argumentos
request.send(null)


request.onreadystatechange = (state) => {
    // Finalice response
    if (request.readyState === 4) {
         let response = JSON.parse(request.response);
         console.log(response);
    }
}
